module.exports = function (app, express, srcPath) {
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
};
