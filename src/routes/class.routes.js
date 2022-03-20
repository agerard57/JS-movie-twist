module.exports = function (app, express, srcPath) {
  app.use(
    "/assets/class/userData.class.js",
    express.static(srcPath + "class/userData.class.js")
  );
};
