const Category = require("../models/").categories;
const { v4: uuidv4 } = require("uuid");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {
  slugMaker,
  findCategoryByName,
  findCategoryById,
  findCategoryBySlug,
  updateCategoryHistory,
  forceFindCategoryByName,
  forceFindCategoryById,
  findAdminByToken,
} = require("../utils/utils");

//Add a new category by Admin
const addCategory = async (req, res) => {
  const { name, token, status } = req.query;

  //Checking where some field missing or not
  if (!name) return res.json({ status: false, message: "Missing Field" });

  if (name.length <= 3)
    return res.json({
      status: false,
      message: "Name must be more then three character long!",
    });

  //Checking category with same name is already exist or not
  if (await findCategoryByName(name))
    return res.json({ status: false, message: "This Category Already Exist" });

  if (await forceFindCategoryByName(name))
    return res.json({
      status: false,
      message:
        "Category with this name is soft deleted. You can not insert or update category with this name. you can try with another name or first force delete then insert",
    });

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(name);
  if (await findCategoryBySlug(slug)) slug = slug + uuidv4();

  //Creating a new category
  const createdCategory = await Category.create({
    name: name,
    slug: slug,
    status: status,
  }).catch((err) => {
    console.log(err);
  });
  await updateCategoryHistory(token, createdCategory.id, 1);

  res.json({
    status: true,
    message: "Category Created Successfully",
    category: createdCategory,
  });
};

//Update an existing category by Admin
const updateCategory = async (req, res) => {
  const { name, token, status, categoryId } = req.query;

  //Checking where any required field missing or not
  if (!name || !categoryId)
    return res.json({ status: false, message: "Missing Fields" });

  //Checking where a category with this CategoryId exist or not
  if (!(await findCategoryById(categoryId)))
    return res.json({ status: false, message: "This Category does not Exist" });

  //Checking the length of name
  if (name.length <= 3)
    return res.json({
      status: false,
      message: "Name must be three character long!",
    });

  //Checking category with same name is already exist or not
  let category = await findCategoryByName(name);
  if (category && !(categoryId == categoryId))
    return res.json({
      status: false,
      message: "Category with this name Already Exist, try another name",
    });

  if (await forceFindCategoryByName(name))
    return res.json({
      status: false,
      message:
        "Category with this name is soft deleted. You can not insert or update category with this name. you can try with another name or first force delete then insert",
    });

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(name);
  if (await findCategoryBySlug(slug)) slug = slug + uuidv4();

  //Update the existing Category
  const updatedCategory = await Category.update(
    {
      name: name,
      slug: slug,
      status: status,
    },
    {
      where: {
        id: categoryId,
      },
    }
  );
  await updateCategoryHistory(token, categoryId, 2);

  res.json({
    status: updatedCategory[0],
    message: "Category Updated Successfully!",
  });
};

//Delete a Category
const deleteCategory = async (req, res) => {
  const { categoryId, token } = req.query;

  //Checking where any required field missing or not
  if (!categoryId || categoryId.length < 1)
    return res.json({ status: false, message: "Missing fields!" });

  //Checking where a category with this CategoryId exist or not
  if (!(await findCategoryById(categoryId)))
    return res.json({ status: false, message: "This Category does not Exist" });

  const deletedCategory = await Category.destroy({
    where: {
      id: categoryId,
    },
  });
  await updateCategoryHistory(token, categoryId, 0);

  res.json({
    status: deletedCategory[0],
    message: "This Category Deleted Successfully",
  });
};

//Force delete a deleted category
const forceDeleteCategory = async (req, res) => {
  const { categoryId, token } = req.query;

  //Checking where any required field missing or not
  if (!categoryId || categoryId.length < 1)
    return res.json({ status: false, message: "Missing fields!" });

  //Checking where a category with this CategoryId exist or not
  if (!(await forceFindCategoryById(categoryId)))
    return res.json({ status: false, message: "This Category does not Exist" });

  const deletedCategory = await Category.destroy({
    where: {
      id: categoryId,
    },
    force: true,
  });
  await updateCategoryHistory(token, categoryId, 3);

  res.json({
    status: deletedCategory[0],
    message: "This Category Force Deleted Successfully!",
  });
};

//Get All Categories
const getAllCategories = async (req, res) => {
  const allExistingCategory = await Category.findAll();
  const allDeletedCategory = await Category.findAll({
    where: {
      deletedAt: {
        [Op.ne]: null,
      },
    },
    paranoid: false,
  });
  //console.log(await checkRole(req.token));
  if ((await checkRole(req.query.token)) == 1) {
    res.json({
      "All categories": allExistingCategory,
      "All Deleted Categories": allDeletedCategory,
    });
  }
  res.json({
    "All Categories": allExistingCategory,
  });
};

const restoreCategory = async (req, res) => {
  const { token, categoryId } = req.query;

  //Checking where any required field missing or not
  if (!categoryId || categoryId.length < 1)
    return res.json({ status: false, message: "Missing fields!" });

  //Checking where category with this id is exist or not
  if (!(await forceFindCategoryById(categoryId)))
    return res.json({
      status: false,
      message: "This Category does not Exist in deleted List",
    });

  const restoredCateogry = await Category.restore({
    where: {
      id: categoryId,
    },
  });
  updateCategoryHistory(token, categoryId, 4);

  res.json({
    status: restoredCateogry,
    message: "Category Restore Successfull!",
  });
};

const checkRole = async (token) => {
  return (await findAdminByToken(token)) ? 1 : 2;
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  forceDeleteCategory,
  getAllCategories,
  restoreCategory,
};
