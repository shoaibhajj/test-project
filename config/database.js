const { Sequelize } = require("sequelize");

const dbConnection = () => {
  const dbUrl = "postgres://dev_lut7_user:DsPlkblaAycNGfBEwJaW1Aixq1GnJSG1@dpg-cjo3udcdfrcc73b424lg-a.oregon-postgres.render.com/dev_lut7";
  const sequelize = new Sequelize(dbUrl, {
    dialect: "postgres",
    dialectOptions: {
      connectTimeout: 30000, // increase the connection timeout to 30 seconds
    },
  });

  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = dbConnection();