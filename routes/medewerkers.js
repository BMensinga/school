const express = require("express");

const router = express.Router();

module.exports = (params) => {
  const { medewerkerService } = params;

  router.get("/", async (request, response) => {
    const medewerkers = await medewerkerService.getList();
    return response.json(medewerkers);
  });
  router.get("/:shortname", (request, response) => {
    return response.send(`Deze pagina is van: ${request.params.shortname}`);
  });

  return router;
};
