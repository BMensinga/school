const express = require("express");

const router = express.Router();

module.exports = (params) => {
  // console.log(params);

  const { klantenService } = params;
  // console.log(params.medewerkersService);

  router.get("/", async (request, response) => {
    const klanten = await klantenService.getList();
    return response.render("pages/klanten.ejs", {
      pageTitle: "Klanten Objects",
      klanten,
    });
  });

  return router;
};
