"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin_category_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // admin_category_histories.belongsTo(models.admins);
      // admin_category_histories.belongsTo(models.categories);
    }
  }
  admin_category_histories.init(
    {
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        comment: " 0 = deleted, 1 = created, 2 = updated",
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "admin_category_histories",
      tableName: "admin_category_histories",
      paranoid: true,
    }
  );
  return admin_category_histories;
};
