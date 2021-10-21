"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admin_post_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // admin_post_histories.belongsTo(models.admins);
      // admin_post_histories.belongsTo(models.posts);
    }
  }
  admin_post_histories.init(
    {
      adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postId: {
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
      modelName: "admin_post_histories",
      tableName: "admin_post_histories",
      paranoid: true,
    }
  );
  return admin_post_histories;
};
