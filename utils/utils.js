const jwt = require("jsonwebtoken");
const Category = require("../models").categories;
const Post = require("../models").posts;
const Admin = require("../models").admins;
const ACH = require("../models").admin_category_histories;
const APH = require("../models").admin_post_histories;

//Function for verifying  JWT
const verifyToken = async (req, res, next) => {
  const token = req.query.token;
  if (!token) return res.status(401).send("access denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
};

//Function for Finding a category using ID
const findCategoryById = async (id) => {
  const result = await Category.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

//Function for finding a category using slug
const findCategoryBySlug = async (slug) => {
  const result = await Category.findOne({
    where: {
      slug: slug,
    },
  });
  return result;
};

//Function for finging a category using Name
const findCategoryByName = async (name) => {
  const result = await Category.findOne({
    where: {
      name: name,
    },
  });
  return result;
};

//Function for making Slug
const slugMaker = async (data) => {
  let slug = data.toLowerCase();
  slug = slug.replace(/[^a-zA-Z ]/g, "");
  slug = slug.replace(/[ ]/g, "-");
  return slug.toString();
};

//Function for finding a Admin using its Jwt
const findAdminByToken = async (token) => {
  const result = await Admin.findOne({
    where: {
      jwt: token,
    },
  });
  return result;
};

//Function for category table history update
const updateCategoryHistory = async (token, categoryId, type) => {
  let adminId = (await findAdminByToken(token)).id;
  const createACH = await ACH.create({
    adminId: adminId,
    categoryId: categoryId,
    type: type,
  });
};

const findPostBySlug = async (slug) => {
  const result = await Post.findOne({
    where: {
      slug: slug,
    },
  });
  return result;
};

const updatePostHistory = async (token, postId, type) => {
  let adminId = (await findAdminByToken(token)).id;
  const createAPH = await APH.create({
    adminId: adminId,
    postId: postId,
    type: type,
  });
};

module.exports = {
  slugMaker,
  verifyToken,
  findCategoryById,
  findCategoryByName,
  findAdminByToken,
  findCategoryBySlug,
  updateCategoryHistory,
  findPostBySlug,
  updatePostHistory,
};
