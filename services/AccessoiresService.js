const fs = require("fs");
const util = require("util");

/**
 * We want to use async/await with fs.readFile - util.promisfy gives us that
 */
const readFile = util.promisify(fs.readFile);

/**
 * Logic for fetching speakers information
 */
class AccessoiresService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSON file that contains the Accessoires data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get a list of Accessoires
   */
  async getList() {
    const data = await this.getData();
    return data.map((accessoires) => {
      return {
        item: accessoires.item,
        dagprijs: accessoires.dagprijs,
        nieuwprijs: accessoires.nieuwprijs,
      };
    });
  }

  /**
   * Fetches Accessoires data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, "utf8");
    return JSON.parse(data).accessoires;
  }
}

module.exports = AccessoiresService;
