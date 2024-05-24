const mongoose = require("mongoose");

module.exports=mongoose.model(
  "Product",
  {
    Name: { type: String },
    Category : { type: String },
    Value: { type: Number },
    Quantity: { type: Number },
  },
  "Products"
);
