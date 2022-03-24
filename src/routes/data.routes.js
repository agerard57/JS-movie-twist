const GenresModel = require("../models/genres.model");
const MoviesModel = require("../models/movies.model");
const weatherController = require("../controllers/weather.controller");

module.exports = function (app) {
  app.get("/data/movies", async (req, res) => {
    const posts = await MoviesModel.find();
    res.send(posts);
  });

  app.get("/data/genres", async (req, res) => {
    const posts = await GenresModel.find();
    res.send(posts);
  });

  app.post("/data/weather", weatherController);
};
