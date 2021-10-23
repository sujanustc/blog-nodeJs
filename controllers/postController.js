const Post = require("../models").posts;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { v4: uuidv4 } = require("uuid");
const {
  slugMaker,
  findPostBySlug,
  updatePostHistory,
  findPostById,
  getPostByTitle,
  findCategoryById,
  forceFindPostByTitle,
  forceFindPostById,
  findAdminByToken,
} = require("../utils/utils");

const addPost = async (req, res) => {
  const { title, body, status, keywords, token, categoryId } = req.query;
  //Checking where some required field missing or not
  if (!title || !body || !categoryId)
    return res.json({ status: false, message: "Missing Field" });

  //Length Check
  if (title.length <= 10 || body.length <= 100)
    return res.json({
      status: false,
      message: "minimum length of title and body corresponding 10 and 100!",
    });

  //Category Check
  if (!(await findCategoryById(categoryId)))
    return res.json({
      status: false,
      message: "This Category does not found!",
    });

  //Title checking
  if (await getPostByTitle(title))
    return res.json({
      status: false,
      message:
        "A post with this title is already exist. Please try another title!",
    });

  if (await forceFindPostByTitle(title))
    return res.json({
      status: false,
      message:
        "Post with this Id is soft deleted. You can not insert or update Post with this Title. you can try with another Title or first force delete then try again",
    });

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(title);
  if (await findPostBySlug(slug)) slug = slug + uuidv4();

  //Creating a new Post
  const createdPost = await Post.create({
    title: title,
    body: body,
    slug: slug,
    status: status,
    categoryId: categoryId,
    keywords: JSON.stringify(keywords),
  }).catch((err) => {
    console.log(err);
  });

  updatePostHistory(token, createdPost.id, 1);

  res.json({
    status: true,
    message: "Post Created Successfully",
    post: createdPost,
  });
};

//Update an existing Post
const updatePost = async (req, res) => {
  const { title, body, status, keywords, token, postId, categoryId } =
    req.query;

  //Checking for missing fields
  if (!title || !body || !token || !postId || !categoryId)
    res.json({ status: false, message: "Missing Fields!" });

  //Length Check
  if (title.length <= 10 || body.length <= 100)
    return res.json({
      status: false,
      message: "Minimum length of title and body corresponding 10 and 100!",
    });

  //Cheking where this post exist or not with this postId
  if (!(await findPostById(postId)))
    return res.json({ status: false, message: "This Post does not exist" });

  //Category Check
  if (!(await findCategoryById(categoryId)))
    return res.json({
      status: false,
      message: "This Category does not found!",
    });

  //Title checking
  let post = await getPostByTitle(title);
  if (post && !(post.id == postId))
    return res.json({
      status: false,
      message:
        "A post with this title is already exist. Please try another title!",
    });
  if (await forceFindPostByTitle(title))
    return res.json({
      status: false,
      message:
        "Post with this Id is soft deleted. You can not insert or update Post with this Title. you can try with another Title or first force delete then try again",
    });

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(title);
  if (await findPostBySlug(slug)) slug = slug + uuidv4();

  //Update an existing Post
  const updatedPost = await Post.update(
    {
      title: title,
      body: body,
      slug: slug,
      keywords: JSON.stringify(keywords),
      categoryId: categoryId,
      status: status,
    },
    {
      where: {
        id: postId,
      },
    }
  );
  updatePostHistory(token, postId, 2);

  res.json({ status: updatedPost, message: "Post Updated Successfully!" });
};

//Delete a post
const deletePost = async (req, res) => {
  const { token, postId } = req.query;

  if (!token || !postId)
    return res.json({ status: false, message: "Missing Fields" });

  if (!(await findPostById(postId)))
    return res.json({
      status: false,
      message: "This Post Does not Exist!",
    });

  const deletedPost = await Post.destroy({
    where: {
      id: postId,
    },
  });

  updatePostHistory(token, postId, 0);
  res.json({ status: deletedPost, message: "Post Deleted Successfully!" });
};

const restorePost = async (req, res) => {
  const { token, postId } = req.query;

  if (!token || !postId)
    return res.json({ status: false, message: "Missing Fields" });

  if (!(await forceFindPostById(postId)))
    return res.json({
      status: false,
      message: "This post does not find in the deleted post",
    });

  const restoredPost = await Post.restore({
    where: {
      id: postId,
    },
  });
  updatePostHistory(token, postId, 4);

  res.json({ status: restoredPost, message: "Restored Post Successfully!" });
};

const forceDeletePost = async (req, res) => {
  const { token, postId } = req.query;

  if (!token || !postId)
    return res.json({ status: false, message: "Missing Fields" });

  if (!(await forceFindPostById(postId)))
    return res.json({
      status: false,
      message: "This post does not exist in deleted post!",
    });

  const forceDeletedPost = await Post.destroy({
    where: {
      id: postId,
    },
    force: true,
  });

  updatePostHistory(token, postId, 3);

  res.json({
    status: forceDeletedPost,
    message: "Force Deleted the Post Successfully!",
  });
};

//Get All Post
const getAllPosts = async (req, res) => {
  const allPosts = await Post.findAll();
  const deletedPosts = await Post.findAll({
    where: {
      deletedAt: {
        [Op.ne]: null,
      },
    },
    paranoid: false,
  });
  console.log();
  if ((await checkRole(req.query.token)) == 1) {
    res.json({
      "All Active Posts": await parseJson(allPosts),
      "All Deleted Post": await parseJson(deletedPosts),
    });
  }
  res.json({
    "All Active Posts": await parseJson(allPosts),
  });
};

const parseJson = async (allPosts) => {
  allPosts.forEach((element) => {
    element.keywords = JSON.parse(element.keywords);
    element.keywords = JSON.parse(element.keywords);
  });
  return allPosts;
};

const checkRole = async (token) => {
  return (await findAdminByToken(token)) ? 1 : 2;
};

module.exports = {
  addPost,
  updatePost,
  getAllPosts,
  deletePost,
  restorePost,
  forceDeletePost,
};
