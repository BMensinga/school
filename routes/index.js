const express = require("express");

const medewerkersRoute = require("./medewerkers");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.render("pages/index", { pageTitle: "Welcome" });
  });

  router.use("/medewerkers", medewerkersRoute(params));

  return router;
};
