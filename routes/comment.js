const route = require("express").Router();
const { addComment } = require("../controllers/commentController");

route.post("/makeComment", addComment);

module.exports = route;
