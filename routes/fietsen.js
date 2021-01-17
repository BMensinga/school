const express = require("express");

const router = express.Router();

module.exports = (params) => {
  console.log(params);

  const { accessoiresService } = params;
  console.log(params.accessoiresService);

  router.get("/", async (request, response) => {
    const accessoires = await accessoiresService.getList();
    return response.render("pages/accessoires.ejs", {
      pageTitle: "Accessoires Objects",
      accessoires,
    });
  });

  return router;
};
