module.exports = function (app, express, srcPath) {
  app.get("/list", (_req, res) => {
    res.sendFile(srcPath + "pages/list/list.html");
  });

  app.use(
    "/assets/scripts/list/list.js",
    express.static(srcPath + "pages/list/list.js")
  );

  app.use(
    "/assets/scripts/list/createCard.model.js",
    express.static(srcPath + "pages/list/createCard.model.js")
  );

  app.use(
    "/assets/scripts/list/adminButtons.model.js",
    express.static(srcPath + "pages/list/adminButtons.model.js")
  );
};
