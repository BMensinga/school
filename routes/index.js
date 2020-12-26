const express = require("express");

const medewerkersRoute = require("./medewerkers");

const router = express.Router();

module.exports = (params) => {
  router.get("/", (request, response) => {
    response.render("layout", { pageTitle: "Welcome", template: "index" });
  });

  router.use("/medewerkers", medewerkersRoute(params));

  return router;
};
