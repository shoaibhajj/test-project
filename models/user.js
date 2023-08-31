const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Company = require("./companyModel");
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});
User.associate = (models) => {

    User.belongsTo(models.Company);
  };
module.exports = User;
