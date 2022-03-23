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
    "/assets/scripts/utils/getGenreList.js",
    express.static(srcPath + "utils/getGenreList.js")
  );

  app.use(
    "/assets/scripts/utils/getMovieById.js",
    express.static(srcPath + "utils/getMovieById.js")
  );

  app.use(
    "/assets/scripts/utils/getWeather.js",
    express.static(srcPath + "utils/getWeather.js")
  );

  app.use(
    "/assets/scripts/utils/urlContains.js",
    express.static(srcPath + "utils/urlContains.js")
  );

  app.use(
    "/assets/scripts/utils/userDataStorage.js",
    express.static(srcPath + "utils/userDataStorage.js")
  );
};
