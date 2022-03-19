module.exports = function (app, express, srcPath) {
  app.use(
    "/assets/scripts/navbar.js",
    express.static(srcPath + "core/navbar.js")
  );
};
