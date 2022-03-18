const express = require("express");

module.exports = function routes(app) {
  const router = express.Router();
  const srcPath = __dirname.replace("routes", "");

  app.use(express.urlencoded({ extended: true }));

  app.use("/assets", express.static(srcPath + "assets"));

  require("./auth.routes")(app, express, srcPath);
  require("./genre.routes")(app, express, srcPath);
  require("./list.routes")(app, express, srcPath);
  require("./models.routes")(router);
  require("./movie.routes")(app, express, srcPath);
  require("./navbar.routes")(app, express, srcPath);
  require("./utils.routes")(app, express, srcPath);

  app.use("/", router);

  app.get("/", (_req, res) => {
    res.sendFile(srcPath + "index.html");
  });

  app.get("*", (_req, res) => {
    res.redirect("/");
  });
};
