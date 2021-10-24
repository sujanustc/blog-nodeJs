const route = require("express").Router();
const {
  addPost,
  updatePost,
  getAllPosts,
  deletePost,
  restorePost,
  forceDeletePost,
  viewPostById,
  viewPostByCategory,
  getAllPostsPagination,
  getAllPostsByCategoryPagination,
} = require("../controllers/postController");

route.post("/addPost", addPost);
route.post("/updatePost", updatePost);
route.get("/allPosts", getAllPosts);
route.get("/allPostsPagination", getAllPostsPagination);
route.get("/allPostsByCategoryPagination", getAllPostsByCategoryPagination);

route.delete("/deletePost", deletePost);
route.post("/restorePost", restorePost);
route.delete("/forceDelete", forceDeletePost);
route.get("/viewPostById", viewPostById);
route.get("/viewPostByCategory", viewPostByCategory);

module.exports = route;
