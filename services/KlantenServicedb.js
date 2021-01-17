const fs = require("fs");
const util = require("util");

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class KlantenService {
    /**
     * Constructor
     * @param {*} datafile Path to a JSON file that contains the klanten data
     */
    constructor(datafile) {
        this.datafile = datafile;
    }

    /**
     * Get a list of klanten
     */
    async getList() {
        const data = await this.getData();
        return data.map((klanten) => {
            return {
                firstname: klanten.firstname,
                lastname: klanten.lastname,
                gender: klanten.gender,
            };
        });
    }

    /**
     * Fetches klanten data from the JSON file provided to the constructor
     */
    async getData() {
        const data = await readFile(this.datafile, "utf8");
        return JSON.parse(data).klanten;
    }
}

module.exports = KlantenService;
