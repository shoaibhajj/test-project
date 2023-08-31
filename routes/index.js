const userRoute = require("./userRoute");
const companyRoute = require("./companyRoute");
const projectRoute = require("./projectRoute")
const categoryRoute = require("./categoryRoute")
const mountRoutes = (app) => {
  app.use("/user", userRoute);
  app.use("/company", companyRoute);
  app.use("/project", projectRoute);
  app.use("/category", categoryRoute);
};

module.exports = mountRoutes;
