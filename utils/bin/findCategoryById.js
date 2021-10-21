const Category = require("../models").categories;

const findCategoryById = async (id) => {
  const result = await Category.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

module.exports = {
  findCategoryById,
};
