const movieController = require("../controllers/movie.controller");
const MoviesModel = require("../models/movies.model");

module.exports = function (app, express, srcPath) {
  app.get("/movie/:id", (req, res) => {
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

  app.use(
    "/assets/scripts/movie/movie.form.js",
    express.static(srcPath + "pages/movie/movie.form.js")
  );

  app.use(
    "/assets/scripts/movie/movie.edit.js",
    express.static(srcPath + "pages/movie/movie.edit.js")
  );

  // Shouldn't it be post ? TODO
  /*   app.get("/movie/add", (_req, res) => {
    res.sendFile(srcPath + "index.html");
  }); */
  app
    .route("/movie/edit/:id") //TODO UTILS TO GET URL /
    .get((req, res) => {
      let id = req.params.id;
      res.sendFile(srcPath + "pages/movie/movie.form.html", { id: id });
    })
    .post(movieController.update);

  app.delete("/movie/delete/:id", (req, res) => {
    let id = req.params.id;
    MoviesModel.deleteOne({ id: id }, (err) => {
      if (err) res.send(err);
      else res.send("Deleted");
    });
  });

  app.get("/id/:id", (req, res) => {
    let id = req.params.id;
    res.sendFile(srcPath + "pages/movie/movie.html", { id: id });
  });
};
