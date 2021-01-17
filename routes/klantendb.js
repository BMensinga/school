const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConfig = require("../lib/db");

module.exports = (params) => {
    router.get("/", function (req, res, next) {
        let connection = sql.connect(dbConfig);
        const request = new sql.Request();
        request.query("SELECT firstname, lastname, gender FROM klanten order by firstname", function (err, results) {
            if (err) {
                res.render("pages/klantendb.ejs", {
                    pageTitle: "KlantenDB",
                    data: "",
                });
            } else {
                let result = results.recordset;

                res.render("pages/klantendb.ejs", {
                    pageTitle: "MSSQL Data",
                    data: result,
                });
            }
        });
    });

    return router;
};
