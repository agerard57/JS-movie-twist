const movieController = require("../controllers/movie.controller");

module.exports = function (app, express, srcPath) {
  // Load scripts
  app.use(
    "/assets/scripts/movieForm",
    express.static(srcPath + "pages/movieForm")
  );

  // GET / POST - Add movie form
  app
    .route("/add")
    .get((_req, res) => {
      res.sendFile(srcPath + "pages/movieForm/movie.form.html");
    })
    .post(movieController.add);

  // GET with id / POST - Edit movie form
  app
    .route("/edit/:id")
    .get((req, res) => {
      const id = req.params.id;
      res.sendFile(srcPath + "pages/movieForm/movie.form.html", { id: id });
    })
    .post(movieController.update);

  // DELETE with id- Delete movie
  app.delete("/delete/:id", movieController.delete);
};
