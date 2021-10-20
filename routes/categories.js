const express = require("express");
const route = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

route.post("/addCategory", addCategory);
route.post("/updateCategory", updateCategory);
route.delete("/deleteCategory", deleteCategory);

module.exports = route;
