const searchController = require("../controllers/search.controller");

module.exports = function (app, express, srcPath) {
  // for navbar & navbar.model.js
  app.use(
    "/assets/scripts/navbar.js",
    express.static(srcPath + "core/navbar.js")
  );

  app.use(
    "/assets/scripts/navbar.model.js",
    express.static(srcPath + "core/navbar.model.js")
  );

  app.use(
    "/assets/scripts/loggedMessage.js",
    express.static(srcPath + "core/loggedMessage.js")
  );

  // POST - Search bar
  app.post("/search", searchController);
};
