const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Project = require("./projectModel")
const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});
Category.associate =(models)=>{
  Category.belongsToMany(models.Project, { through: 'CategoryProjects' });
}
module.exports = Category;
