const route = require("express").Router();
const {
  addPost,
  updatePost,
  getAllPosts,
  deletePost,
  restorePost,
  forceDeletePost,
} = require("../controllers/postController");

route.post("/addPost", addPost);
route.post("/updatePost", updatePost);
route.get("/allPosts", getAllPosts);
route.delete("/deletePost", deletePost);
route.post("/restorePost", restorePost);
route.delete("/forceDelete", forceDeletePost);

module.exports = route;
