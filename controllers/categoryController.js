const Category = require("../models/").categories;
const Admin = require("../models/").admins;
const jwt = require("jsonwebtoken");
const { slugMaker } = require("../utils/slugMaker");

const addCategory = async (req, res) => {
  const { name, token, status } = req.query;
  let slug = name.toLowerCase();
  slug = slug.replace(/[^a-zA-Z ]/g, "");
  slug = slug.replace(/[ ]/g, "-");
  console.log(slug);

  if (!name) return res.json({ status: false, message: "missing field" });

  const result = await Category.findOne({
    where: {
      name: name,
    },
  }).catch((err) => {
    console.log(err);
  });
  if (result)
    return res.json({ status: false, message: "This Category already Exist" });

  const findAdminByToken = await Admin.findOne({
    where: {
      jwt: token,
    },
  });
  //console.log(slugMaker(name));

  const createdCategory = await Category.create({
    name: name,
    slug: slug,
    status: status,
    adminId: findAdminByToken.id,
  }).catch((err) => {
    console.log(err);
  });

  res.json(createdCategory);
};

const updateCategory = async (req, res) => {
  const { name, token, status, categoryId } = req.query;
  let slug = name.toLowerCase();
  slug = slug.replace(/[^a-zA-Z ]/g, "");
  slug = slug.replace(/[ ]/g, "-");

  if (!name || !categoryId)
    return res.json({ status: false, message: "missing field" });

  const result = await Category.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!result)
    return res.json({ status: false, message: "This Category do not Exist" });

  const findAdminByToken = await Admin.findOne({
    where: {
      jwt: token,
    },
  });

  const updatedCategory = await Category.update(
    {
      name: name,
      slug: slug,
      status: status,
      adminId: findAdminByToken.id,
    },
    {
      where: {
        id: categoryId,
      },
    }
  ).catch((err) => {
    console.log(err);
  });

  res.json({ status: updatedCategory[0] });
};

const deleteCategory = async (req, res) => {};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
};
