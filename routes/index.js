const express = require("express");

const medewerkersRoute = require("./medewerkers");
const medewerkersdbRoute = require("./medewerkersdb");
const accessoiresRoute = require("./accessoires");
const accessoiresdbRoute = require("./accessoiresdb");
const fietsenRoute = require("./fietsen");
const klantenRoute = require("./klanten");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.render("pages/index", { pageTitle: "Welkom!" });
  });

  router.use("/medewerkers", medewerkersRoute(params));
  router.use("/medewerkersdb", medewerkersdbRoute(params));
  router.use("/accessoires", accessoiresRoute(params));
  router.use("/accessoiresdb", accessoiresdbRoute(params));
  router.use("/fietsen", fietsenRoute(params));
  router.use("/klanten", klantenRoute(params));

  return router;
};
