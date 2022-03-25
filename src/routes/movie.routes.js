const movieController = require("../controllers/movie.controller");

module.exports = function (app, express, srcPath) {
  // Load scripts
  app.use("/assets/scripts/movie", express.static(srcPath + "pages/movie"));

  // GET with id - Single movie page
  app.get("/movie/:id", (req, res) => {
    let id = req.params.id;
    res.sendFile(srcPath + "pages/movie/movie.html", { id: id });
  });

  // GET / POST - Add movie form
  app
    .route("/add")
    .get((_req, res) => {
      res.sendFile(srcPath + "pages/movie/movie.form.html");
    })
    .post(movieController.add);

  // GET with id / POST - Edit movie form
  app
    .route("/edit/:id")
    .get((req, res) => {
      const id = req.params.id;
      res.sendFile(srcPath + "pages/movie/movie.form.html", { id: id });
    })
    .post(movieController.update);

  // DELETE with id- Delete movie
  app.delete("/delete/:id", movieController.delete);
};
