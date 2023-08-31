// Sync models with the database
const dbSync = (Model) => {
  Model.sync({ force: true }) // This will create the table and drop it if it already exists
    .then(() => {
      console.log("Users table created successfully.");
    })
    .catch((error) => {
      console.error("Error creating users table:", error);
    });
};

module.exports = dbSync;
