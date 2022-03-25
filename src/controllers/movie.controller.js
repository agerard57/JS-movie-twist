const MoviesModel = require("../models/movies.model");

const genresArray = (genreList) => {
  const isgenresAnArray = Array.isArray(genreList) ? genreList : [genreList];
  return isgenresAnArray.map((x) => parseInt(x, 10));
};

exports.update = (req, res) => {
  /**
   * "req.body.genres" either gives out a single string or an array of strings.
   * This parses them as an array of number(s).
   *
   * @module movie.controller
   * @param    {String | String[]}   genreList Is req.body.genres.
   * @return   {Number[]}            Gives an number array of genre(s) id(s) (numbers)
   */

  const updateOptions = {
    title: req.body.title,
    original_title: req.body.originaltitle,
    genre_ids: genresArray(req.body.genres),
    overview: req.body.overview,
    release_date: req.body.releasedate,
    vote_average: req.body.avgvote,
    original_language: req.body.lang.toLowerCase(),
  };
  const findById = { id: req.params.id };

  MoviesModel.findOneAndUpdate(findById, updateOptions, (err, res) => {
    if (err)
      /* res.status(500).send("ERROR") */
      res.redirect("/movie/add/?msg=500");
  });
  /* res.status(200).send("Updated") */
  res.redirect("/list?success=updated");
};

exports.add = (req, res) => {
  const addOptions = {
    title: req.body.title,
    original_title: req.body.originaltitle,
    genre_ids: genresArray(req.body.genres),
    overview: req.body.overview,
    release_date: req.body.releasedate,
    vote_average: req.body.avgvote,
    original_language: req.body.lang.toLowerCase(),
  };

  const movie = new MoviesModel(addOptions);

  movie.save((err, movie) => {
    if (err) {
      res.redirect("/list?msg=500");
      return;
    }
    const movieName = encodeURIComponent(movie.title);
    res.redirect(`/list?success=added&subject=${movieName}`);
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  MoviesModel.deleteOne({ id: id }, (err) => {
    if (err) res.send(err);
    else res.send("Deleted");
  });
};
