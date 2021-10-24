"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // posts.hasMany(models.admin_post_histories);
    }
  }
  posts.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
        comment: "0 = pending, 1 = active, 2 = deactive, 3 = deleted",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      keywords: {
        type: DataTypes.STRING,

        get() {
          const rawValue = this.getDataValue("keywords");

          return rawValue ? JSON.parse(rawValue) : null;
        },
      },
    },
    {
      sequelize,
      modelName: "posts",
      tableName: "posts",
      paranoid: true,
    }
  );
  return posts;
};
