"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admins.init(
    {
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      phoneNo: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      score: {
        type: DataTypes.DOUBLE(20, 2),
        defaultValue: 0.0,
      },
      status: {
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
        comment: "0 = pending, 1 = active, 2 = canceled",
      },
      jwt: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "admins",
      tableName: "admins",
      paranoid: true,
    }
  );
  return admins;
};
