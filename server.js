const express = require("express");
const path = require("path");

const MedewerkersService = require("./services/MedewerkersService");
const AccessoiresService = require("./services/AccessoiresService");
const FietsenService = require("./services/FietsenService");
const KlantenService = require("./services/KlantenService");

const medewerkersService = new MedewerkersService("./data/medewerkers.json");
const accessoiresService = new AccessoiresService("./data/accessoires.json");
const fietsenService = new FietsenService("./data/fietsen.json");
const klantenService = new KlantenService("./data/klanten.json");

const routes = require("./routes");
// const medewerkers = require("./routes/medewerkers.js");
// const accessoires = require("./routes/accessoires");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use(
  "/",
  routes({
    medewerkersService,
    accessoiresService,
    fietsenService,
    klantenService,
  })
);

// app.use(medewerkers);
// app.use(accessoires);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
