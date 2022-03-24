const searchController = require("../controllers/search.controller");

module.exports = function (app, express, srcPath) {
  app.use(
    "/assets/scripts/navbar.js",
    express.static(srcPath + "core/navbar.js")
  );

  app.use(
    "/assets/scripts/navbar.model.js",
    express.static(srcPath + "core/navbar.model.js")
  );

  app.post("/search", searchController);
};
