"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categories.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      status: {
        type: DataTypes.INTEGER(),
        defaultValue: 1,
        comment: "0 = pending, 1 = active, 2 = canceled",
      },
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:
          "Store the Admin ID who create this category. if the category edit by someone then replace the value with editor admin Id or if removed this cateogry by someone replace the value with the admin id who removed it",
      },
    },
    {
      sequelize,
      modelName: "categories",
      tableName: "categories",
      paranoid: true,
    }
  );
  return categories;
};
