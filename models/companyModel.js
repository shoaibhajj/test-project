const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
//const User = require("./user");
//const Project = require("./projectModel");
const Company = sequelize.define("Company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});

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
           User.belongsTo(Company);
           Company.hasMany(User);
          Company.hasMany(Project)
          Project.belongsTo(Company);
          Project.belongsToMany(Category, { through: 'CategoryProjects' });
          Category.belongsToMany(Project, { through: 'CategoryProjects' });
  module.exports = {Company, User,Project,Category};
