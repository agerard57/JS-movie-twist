module.exports = function (app, express, srcPath) {
  // Load scripts
  app.use("/assets/scripts/movie", express.static(srcPath + "pages/movie"));

  // GET with id - Single movie page
  app.get("/movie/:id", (req, res) => {
    const id = req.params.id;
    res.sendFile(srcPath + "pages/movie/movie.html", { id: id });
  });
};
