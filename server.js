const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dbSync = require("./databaseSync");
const sequelize = require("./config/database")
dotenv.config({ path: "config.env" });
app.use(morgan("dev"));
app.use(bodyParser.json());

;
// to build DB tables
//sequelize.sync({force: true})
//Routes
const mountRoutes = require("./routes");


// Mount Routes
mountRoutes(app);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is Running on : ${port}`);
});
