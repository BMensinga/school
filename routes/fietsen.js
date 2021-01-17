const express = require("express");

const router = express.Router();

module.exports = (params) => {
  console.log(params);

  const { fietsenService } = params;
  console.log(params.fietsenService);

  router.get("/", async (request, response) => {
    const fietsen = await fietsenService.getList();
    return response.render("pages/fietsen.ejs", {
      pageTitle: "Fietsen Objects",
      fietsen,
    });
  });

  return router;
};
