const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");

module.exports = function routes(app) {
  const router = express.Router();
  const srcPath = __dirname.replace("routes", "");

  // /////////////////////////
  // Middlewares instantiated
  app.use("/", router);
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(favicon(srcPath + "assets/img/favicon.ico"));

  // ///////////////////////////
  // Assets (CSS / JS / IMGS...)
  app.use("/assets", express.static(srcPath + "assets"));

  // ///////
  // Routes
  require("./auth.routes")(app, express, srcPath);
  require("./class.routes")(app, express, srcPath);
  require("./core.routes")(app, express, srcPath);
  require("./data.routes")(app);
  require("./home.routes")(app, express, router, srcPath);
  require("./list.routes")(app, express, srcPath);
  require("./movie.routes")(app, express, srcPath);

  // //////
  // Utils
  app.use("/assets/scripts/utils", express.static(srcPath + "utils"));

  // ////////////////////////////////////////
  // Redirection in case an url doesnt exist
  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
