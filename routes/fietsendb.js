const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConfig = require("../lib/db");

module.exports = (params) => {
    router.get("/", function (req, res) {
       sql.connect(dbConfig);
        const request = new sql.Request();
        request.query("SELECT fiets, dagprijs, nieuwprijs FROM fietsen order by fiets", function (err, results) {
            if (err) {
                console.log(err);
                res.render("pages/fietsendb.ejs", {
                    pageTitle: "FietsenDB",
                    data: "",
                });
            } else {
                let result = results.recordset;

                res.render("pages/fietsendb.ejs", {
                    pageTitle: "MSSQL Data",
                    data: result,
                });
            }
        });
    });

    return router;
};
