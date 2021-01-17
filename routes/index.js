const express = require("express");

const medewerkersRoute = require("./medewerkers");
const medewerkersdbRoute = require("./medewerkersdb");
const accessoiresRoute = require("./accessoires");
const fietsenRoute = require("./fietsen");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.render("pages/index", { pageTitle: "Welkom!" });
  });

  router.use("/medewerkers", medewerkersRoute(params));
  router.use("/medewerkersdb", medewerkersdbRoute(params));
  router.use("/accessoires", accessoiresRoute(params));
  router.use("/fietsen", fietsenRoute(params));

  return router;
};
