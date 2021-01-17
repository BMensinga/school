const express = require("express");

const medewerkersRoute = require("./medewerkers");
const medewerkersdbRoute = require("./medewerkersdb");
const accessoiresRoute = require("./accessoires");
const accessoiresdbRoute = require("./accessoiresdb");
const fietsenRoute = require("./fietsen");
<<<<<<< HEAD
const klantenRoute = require("./klanten");
=======
const fietsendbRoute = require("./fietsendb");
>>>>>>> 2f0b79ae75a53e44cb45390056fc34a01f3ac715

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
<<<<<<< HEAD
  router.use("/klanten", klantenRoute(params));
=======
  router.use("/fietsendb", fietsendbRoute(params));
>>>>>>> 2f0b79ae75a53e44cb45390056fc34a01f3ac715

  return router;
};
