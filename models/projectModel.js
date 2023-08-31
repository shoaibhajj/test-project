const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Company = require("./companyModel")
const Category = require("./categoryModel")
const Project = sequelize.define("Project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StartDate: {
    type: DataTypes.DATE,
  },
  EndDate: {
    type: DataTypes.DATE,
    
  },

});
Project.associate = (models)=>{
    Project.belongsTo(models.Company);
    Project.belongsToMany(models.Category, { through: 'CategoryProjects' });
}
module.exports = Project;
