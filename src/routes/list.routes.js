module.exports = function (app, express, srcPath) {
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
};
