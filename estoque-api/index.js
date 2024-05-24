const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./db.js");

const app = express();

app.use(bodyParser.json());

dbConnection()
  .then(() => {
    console.log("Database is connected.")
    app.listen(3000, () => console.log("Server is started on https://localhost:3000/"));
  })
  .catch((err) => console.log(err));
