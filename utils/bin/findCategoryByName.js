const Category = require("../models").categories;

const findCategoryByName = async (name) => {
  const result = await Category.findOne({
    where: {
      name: name,
    },
  });
  return result;
};

module.exports = {
  findCategoryByName,
};
