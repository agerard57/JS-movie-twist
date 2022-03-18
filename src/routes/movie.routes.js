module.exports = function (app, express, srcPath) {
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
};
