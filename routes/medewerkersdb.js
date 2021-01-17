const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConfig = require("../lib/db");

module.exports = (params) => {
  router.get("/", function (req, res, next) {
    let connection = sql.connect(dbConfig);
    const request = new sql.Request();
    request.query("SELECT * FROM medewerkers", function (err, rows) {
      console.log("iets");
      console.log(err);
      if (err) {
        res.render("pages/medewerkersdb.ejs", {
          pageTitle: "MedewerkersDB",
          data: "",
        });
      } else {
        let newResults = [];
        for (const key in results) {
          if (key === "recordsets") {
            results[key].forEach((arr) => {
              arr.forEach((obj) => {
                Object.keys(obj).forEach((key) => {
                  newResults.push(obj[key]);
                });
              });
            });
          }
        }

        rows = JSON.parse(newResults);

        res.render("pages/medewerkersdb.ejs", {
          pageTitle: "MSSQL Data",
          data: rows,
        });
      }
    });
  });

  return router;
};
