const express = require("express");

const router = express.Router();

module.exports = (params) => {
  console.log(params);
  const { medewerkersService } = params;
  console.log(params.medewerkersService);
  router.get("/", async (request, response) => {
    const medewerkers = await medewerkersService.getList();
    return response.json(medewerkers);
  });

  return router;
};
