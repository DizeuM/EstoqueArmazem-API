const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./db.js");
const productRoutes=require('./controllers/product.controller')

const app = express();

app.use(bodyParser.json());

app.use('/product',productRoutes)

dbConnection()
  .then(() => {
    console.log("Database is connected.")
    app.listen(3000, () => console.log("Server is started on https://localhost:3000/"));
  })
  .catch((err) => console.log(err));
