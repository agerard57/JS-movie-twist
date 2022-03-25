const GenresModel = require("../models/genres.model");
const MoviesModel = require("../models/movies.model");
const weatherController = require("../controllers/weather.controller");

module.exports = function (app) {
  // GET - Get data from Models
  app.get("/data/movies", async (_req, res) => {
    const posts = await MoviesModel.find();
    res.send(posts);
  });

  app.get("/data/genres", async (_req, res) => {
    const posts = await GenresModel.find();
    res.send(posts);
  });

  // POST - Fetch weather from city
  app.post("/data/weather", weatherController);
};
