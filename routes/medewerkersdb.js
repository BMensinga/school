const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConn = require("../lib/db");
const request = new sql.Request();

module.exports = (params) => {
  router.get("/", function (req, res, next) {
    request.query("SELECT * FROM dbo.medewerkers", function (err, rows) {
      if (err) {
        req.flash("error", err);

        res.render("pages/medewerkersdb.ejs", { pageTitle: "test", data: "" });
      } else {
        let newResults = [];
        for (let key in results) {
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
        }
      };
    );
  });
  return router;
};
