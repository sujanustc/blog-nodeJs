const express = require("express");
const route = express.Router();
const { adminLogin, adminRegister } = require("../controllers/adminController");
const { verifyToken } = require("../utils/utils");

route.get("/", (req, res) => {
  res.json({ msg: "admin route home" });
});

route.post("/login", adminLogin);

route.post("/register", adminRegister);

route.use("/category", verifyToken, require("./categories"));
route.use("/post", verifyToken, require("./posts"));

module.exports = route;
