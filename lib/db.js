const sql = require("mssql");

const dbConfig = {
  user: "MicrosoftAccount\timkoorevaar@hotmail.com",
  password: "",
  server: "DESKTOP-DSKO7S8SQLEXPRESS",
  database: "MedewerkersDB",
};

console.log(dbConfig);

const connection = sql.connect("DESKTOP-DSKO7S8\timko");

console.log("Er is een connectie met de server.");

module.exports = connection;
