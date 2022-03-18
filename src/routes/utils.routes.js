module.exports = function (app, express, srcPath) {
  app.use(
    "/assets/scripts/utils/formatReleaseDate.js",
    express.static(srcPath + "utils/formatReleaseDate.js")
  );

  app.use(
    "/assets/scripts/utils/formatImageUrl.js",
    express.static(srcPath + "utils/formatImageUrl.js")
  );

  app.use(
    "/assets/scripts/utils/getGenreName.js",
    express.static(srcPath + "utils/getGenreName.js")
  );
};
