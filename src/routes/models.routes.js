const GenresModel = require("../models/genres.model");
const MoviesModel = require("../models/movies.model");

module.exports = function (router) {
  router.get("/data/movies", async (req, res) => {
    const posts = await MoviesModel.find();
    res.send(posts);
  });

  router.get("/data/genres", async (req, res) => {
    const posts = await GenresModel.find();
    res.send(posts);
  });
};

//TODO Remove ALL unused "req"s
