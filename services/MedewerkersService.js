const fs = require("fs");
const util = require("util");

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class MedewerkersService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSON file that contains the medewerkers data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get a list of speakers
   */
  async getList() {
    const data = await this.getData();
    return data.map((medewerkers) => {
      return {
        name: medewerkers.firstName,
        lastname: medewerkers.lastName,
        gender: medewerkers.gender,
      };
    });
  }

  /**
   * Fetches speakers data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, "utf8");
    return JSON.parse(data).medewerkers;
  }
}

module.exports = MedewerkersService;
