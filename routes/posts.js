const route = require("express").Router();
const { addPost } = require("../controllers/postController");

route.post("/addPost", addPost);

module.exports = route;
