const Category = require("../models/").categories;
const { v4: uuidv4 } = require("uuid");
const {
  slugMaker,
  findAdminByToken,
  findCategoryByName,
  findCategoryById,
  findCategoryBySlug,
  updateCategoryHistory,
} = require("../utils/utils");

//Add a new category by Admin
const addCategory = async (req, res) => {
  const { name, token, status } = req.query;

  //Checking where some field missing or not
  if (!name) return res.json({ status: false, message: "Missing Field" });

  //Checking category with same name is already exist or not
  if (await findCategoryByName(name))
    return res.json({ status: false, message: "This Category Already Exist" });

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

  //Checking for duplicate slug if find one then add a random string for unique
  let slug = await slugMaker(name);
  if (await findCategoryBySlug(slug)) slug = slug + uuidv4();

  console.log(await findCategoryBySlug(slug));

  //Update the existing Category
  const updatedCategory = await Category.update(
    {
      name: name,
      slug: slug,
      status: status,
      adminId: (await findAdminByToken(token)).id,
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

const deleteCategory = async (req, res) => {
  const { categoryId, token } = req.query;

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

const getAllCategories = async (req, res) => {
  const allcategory = await Category.findAll();
  console.log();
  res.json(allcategory);
};

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
