const Post = require("../models").posts;
const { v4: uuidv4 } = require("uuid");
const {
  slugMaker,
  findPostBySlug,
  updatePostHistory,
} = require("../utils/utils");

const addPost = async (req, res) => {
  const { title, body, status, keywords, token } = req.query;
  console.log(title, body, keywords, token);
  //Checking where some required field missing or not
  if (!title || !body)
    return res.json({ status: false, message: "Missing Field" });

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(title);
  if (await findPostBySlug(slug)) slug = slug + uuidv4();

  //Creating a new Post
  const createdPost = await Post.create({
    title: title,
    body: body,
    slug: slug,
    status: status,
    keywords: JSON.stringify(keywords),
  }).catch((err) => {
    console.log(err);
  });

  await updatePostHistory(token, createdPost.id, 1);
  res.json({
    status: true,
    message: "Post Created Successfully",
    post: createdPost,
  });
};

module.exports = { addPost };
