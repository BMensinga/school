const fs = require("fs");
const util = require("util");

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class MedewerkersdbService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSON file that contains the medewerkers data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get a list of medewerkers
   */
  async getList() {
    const data = await this.getData();
    return data.map((medewerkersdb) => {
      return {
        firstname: medewerkersdb.firstname,
        lastname: medewerkersdb.lastname,
        gender: medewerkersdb.gender,
        functie: medewerkersdb.functie,
      };
    });
  }

  /**
   * Fetches medewerkers data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, "utf8");
    return JSON.parse(data).medewerkersdb;
  }
}

module.exports = MedewerkersdbService;
