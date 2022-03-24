const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const MoviesModel = require("../models/movies.model");

module.exports = function routes(app) {
  const router = express.Router();
  const srcPath = __dirname.replace("routes", "");

  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(favicon(srcPath + "assets/img/favicon.ico"));

  app.use("/assets", express.static(srcPath + "assets"));

  require("./auth.routes")(app, express, srcPath);
  require("./class.routes")(app, express, srcPath);
  require("./core.routes")(app, express, srcPath);
  require("./home.routes")(app, express, router, srcPath);
  require("./list.routes")(app, express, srcPath);
  require("./models.routes")(router);
  require("./movie.routes")(app, express, srcPath);
  require("./utils.routes")(app, express, srcPath);

  //TODO CLEAN THIS MESS
  app
    .route("/search")
    .get((_req, res) => {
      res.render("search");
    })
    .post((req, res) => {
      let resultItem = "";
      let response = "";
      let searchQuery = req.body.title;
      if (searchQuery.length > 0)
        MoviesModel.find(
          { title: { $regex: new RegExp(searchQuery, "i") } },
          (_err, results) => {
            results.forEach((sResult) => {
              const truncateValue = 30;
              const shortenTitle =
                sResult.title.length > truncateValue
                  ? `${sResult.title.substring(0, truncateValue)}…`
                  : sResult.title;

              if (sResult.title.indexOf(searchQuery) !== -1)
                resultItem =
                  resultItem +
                  `<li class="list-group-item"><a class="link-secondary" href="/movie/${sResult.id}">${shortenTitle}</a></li>`;
            });
            if (resultItem === "")
              response = "<li class='list-group-item'>No movie found</li>";
            else response = resultItem;
            res.send({ response: response });
          }
        ).limit(6);
    });
};

/*   app.get("*", (_req, res) => {
    res.redirect("/");
  }); */
//TODO Put this back on please
//TODO² Don't forget to do a search page and new route page
