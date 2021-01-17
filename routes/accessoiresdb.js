const { response } = require("express");
const express = require("express");
const router = express.Router();

const sql = require("mssql");
const dbConfig = require("../lib/db");

module.exports = (params) => {
    router.get("/", function (req, res, next) {
        let connection = sql.connect(dbConfig);
        const request = new sql.Request();
        request.query("SELECT item, dagprijs, nieuwprijs FROM accessoires order by item", function (err, results) {
            if (err) {
                console.log(err);
                res.render("pages/accessoiresdb.ejs", {
                    pageTitle: "AccessoiresDB",
                    data: "",
                });
            } else {
                let result = results.recordset;

                res.render("pages/accessoiresdb.ejs", {
                    pageTitle: "MSSQL Data",
                    data: result,
                });
            }
        });
    });

    return router;
};
