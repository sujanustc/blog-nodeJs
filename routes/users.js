const express = require("express");
const route = express.Router();
const { userLogin, userRegister } = require("../controllers/userController");
const { verifyToken } = require("../utils/utils");

route.get("/", (req, res) => {
  res.json({ msg: "user route home" });
});

route.post("/login", userLogin);
route.post("/register", userRegister);
route.use("/category", verifyToken, require("./categories"));
route.use("/post", verifyToken, require("./posts"));

module.exports = route;
