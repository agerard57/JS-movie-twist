module.exports = function (app, express, srcPath) {
  // Load scripts
  app.use("/assets/scripts/list", express.static(srcPath + "pages/list"));

  // GET - Movie list page
  app.get("/list", (_req, res) => {
    res.sendFile(srcPath + "pages/list/list.html");
  });

  // GET with id - List page by genre
  app.get("/genre/:id", (req, res) => {
    let id = req.params.id;
    res.sendFile(srcPath + "pages/list/list.html", { id: id });
  });
};
