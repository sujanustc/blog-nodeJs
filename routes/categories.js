const express = require("express");
const route = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/categoryController");

route.post("/addCategory", addCategory);
route.post("/updateCategory", updateCategory);
route.delete("/deleteCategory", deleteCategory);
route.get("/allcategories", getAllCategories);

module.exports = route;
