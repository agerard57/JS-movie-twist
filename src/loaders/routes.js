const express = require("express");

module.exports = function routes(app) {
  let router = express.Router();
  let srcPath = __dirname.replace("loaders", "");

  // ........................ Assets route ........................
  app.use("/assets", express.static(srcPath + "assets"));

  // ........................ Genre list route ........................
  app.get("/genre/:id", (req, res) => {
    let id = req.params.id;
    res.sendFile(srcPath + "pages/genre/genre.html", { id: id });
  });

  app.use(
    "/assets/scripts/genre/genre.js",
    express.static(srcPath + "pages/genre/genre.js")
  );

  app.use(
    "/assets/scripts/genre/genre.model.js",
    express.static(srcPath + "pages/genre/genre.model.js")
  );

  // ........................ Navbar menu route ........................
  app.use(
    "/assets/scripts/navbar.js",
    express.static(srcPath + "core/navbar.js")
  );

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
    "/assets/scripts/list/list.model.js",
    express.static(srcPath + "pages/list/list.model.js")
  );

  // ........................ Movie Routes ........................
  app.get("/id/:id", (req, res) => {
    let id = req.params.id;
    res.sendFile(srcPath + "pages/movie/movie.html", { id: id });
  });

  app.use(
    "/assets/scripts/movie/movie.js",
    express.static(srcPath + "pages/movie/movie.js")
  );

  app.use(
    "/assets/scripts/movie/movie.model.js",
    express.static(srcPath + "pages/movie/movie.model.js")
  );

  // ........................ Utils route ........................
  app.use(
    "/assets/scripts/utils/formatReleaseDate.js",
    express.static(srcPath + "utils/formatReleaseDate.js")
  );

  app.use(
    "/assets/scripts/utils/formatImageUrl.js",
    express.static(srcPath + "utils/formatImageUrl.js")
  );

  app.use(
    "/assets/scripts/utils/getGenreName.js",
    express.static(srcPath + "utils/getGenreName.js")
  );

  // ........................ Redirect Route ........................
  //Automatically redirect any invalid paths to home
  //TODO Redirect to custom error page
  /*   app.get("*", (_req, res) => {
    res.redirect("/");
  }); */
};
