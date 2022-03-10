const express = require("express");

module.exports = function routes(app) {
  let router = express.Router();
  let srcPath = __dirname.replace("loaders", "");

  // ........................ Assets route ........................
  app.use("/assets", express.static(srcPath + "assets"));

  // ........................ Home route ........................
  app.get("/", (_req, res) => {
    res.sendFile(srcPath + "index.html");
  });

  app.use("/", router);

  // ........................ List Routes ........................
  app.get("/list", (_req, res) => {
    res.sendFile(srcPath + "pages/list/list.html");
  });

  app.use(
    "/assets/scripts/list/list.js",
    express.static(srcPath + "pages/list/list.js")
  );

  app.use(
    "/assets/scripts/list/list.cards.js",
    express.static(srcPath + "pages/list/list.cards.js")
  );
  // ........................ Redirect Route ........................
  //Automatically redirect any invalid paths to home
  //TODO Redirect to custom error page
  /*   app.get("*", (_req, res) => {
    res.redirect("/");
  }); */
};
