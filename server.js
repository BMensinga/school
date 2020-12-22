const express = require("express");
const path = require("path");

const MedewerkersService = require("./services/MedewerkersService");

const medewerkersService = new MedewerkersService("./data/medewerkers.json");

const routes = require("./routes");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));

app.use(
  "/",
  routes({
    medewerkersService,
  })
);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
