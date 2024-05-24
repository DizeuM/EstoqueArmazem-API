const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/", (req, res) => {
  Product.find()
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving products.");
    });
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then((data) => {
      if (!data) {
        return res.status(404).send("Product not found.");
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving product.");
    });
});

router.post("/", (req, res) => {
  Product.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating product.");
    });
});

router.put("/:id", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send("Product not found.");
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating product.");
    });
});

router.delete("/:id", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
    .then((data) => {
      if (!data) {
        return res.status(404).send("Product not found.");
      }
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting product.");
    });
});

module.exports = router;
