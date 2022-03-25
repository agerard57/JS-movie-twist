const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");

const srcPath = __dirname.replace("routes", "");

module.exports = function routes(app) {
  const router = express.Router();
  // /////////////////////////
  // Middlewares instantiated
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(favicon(srcPath + "assets/img/favicon.ico"));

  // ///////////////////////////
  // Assets (CSS / JS / IMGS...)
  app.use("/assets", express.static(srcPath + "assets"));

  // ///////
  // Routes
  require("./data.routes")(app);
  require("./auth.routes")(app, express, srcPath);
  require("./class.routes")(app, express, srcPath);
  require("./core.routes")(app, express, srcPath);
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
