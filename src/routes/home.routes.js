module.exports = function (app, express, router, srcPath) {
  app.use("/", router);

  app.get("/", (_req, res) => {
    res.sendFile(srcPath + "index.html");
  });

  app.use(
    "/assets/scripts/home/home.js",
    express.static(srcPath + "pages/home/home.js")
  );
};
