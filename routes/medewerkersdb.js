const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConn = require("../lib/db");
const request = new sql.Request();

module.exports = (params)=>{

  router.get("/", function (req, res, next) {
    request.query(
      "SELECT * FROM dbo.MedewerkersDB",
    function (err, rows) {
        if (err) {
            req.flash("error", err);

            //render to views/medewerkersdb/medewerkersdb.ejs.
            res.render("pages/medewerkersdb.ejs", {pageTitle:"MSSQL Data", data: ""});
        } else {
          //Function to transform output of query in proper JSON format
          let newResults = [];
          for (let key in rows) {
            if (key === "recordsets") {
              rows[key].forEach((arr) => {
                arr.forEach((obj) => {
                  Object.keys(obj).forEach((key) => {
                    newResults.push(obj[key]);
                  });
                });
              });
            }
          }

        rows = JSON.parse(newResults);

        res.render("pages/medewerkersdb.ejs", {pageTitle: "MSSQL Data", data: ""});
        }
    }
    );
  };