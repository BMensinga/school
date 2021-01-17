// const sql = require("mssql");

const dbConfig = {
  user: "biker",
  password: "biker123",
  server: "127.0.0.1\\SQLEXPRESS",
  database: "bikerdb",
};

console.log(dbConfig);

// const connection = sql.connect("mssql://biker:biker123@localhost/bikerdb");
// console.log("Er is een connectie met de server.");

module.exports = dbConfig;
