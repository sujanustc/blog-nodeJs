const express = require("express");
const route = express.Router();
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  forceDeleteCategory,
  restoreCategory,
} = require("../controllers/categoryController");

route.post("/addCategory", addCategory);
route.post("/updateCategory", updateCategory);
route.delete("/deleteCategory", deleteCategory);
route.get("/allcategories", getAllCategories);
route.delete("/forceDeleteCategory", forceDeleteCategory);
route.post("/restoreCategory", restoreCategory);

module.exports = route;
