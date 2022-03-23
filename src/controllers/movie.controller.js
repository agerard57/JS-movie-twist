const MoviesModel = require("../models/movies.model");

exports.update = (req, res) => {
  /**
   * "req.body.genres" either gives out a single string or an array of strings.
   * This parses them as an array of number(s).
   *
   * @module movie.controller
   * @param    {String | String[]}   genreList Is req.body.genres.
   * @return   {Number[]}            Gives an number array of genre(s) id(s) (numbers)
   */

  const genresArray = (genreList) => {
    const isgenresAnArray = Array.isArray(genreList) ? genreList : [genreList];
    return isgenresAnArray.map((x) => parseInt(x, 10));
  };

  const update = {
    title: req.body.title,
    original_title: req.body.originaltitle,
    genre_ids: genresArray(req.body.genres),
    overview: req.body.overview,
    release_date: req.body.releasedate,
    vote_average: req.body.avgvote,
    original_language: req.body.lang.toLowerCase(),
  };
  const filter = { id: req.params.id };

  MoviesModel.findOneAndUpdate(filter, update, (err, res) => {
    if (err) res.status(500).send("ERROR");
  });
  res.redirect("/list?msg=updated&msg=200");

  // TODO Alert Hander
  // TODO Modal Handler
};

/* exports.save = (req, res) => {
  const user = new UsersModel({
    title: req.body.username,
    original-title: bcrypt.hashSync(req.body.password1, 8),
    genres: req.body.city,
    overview: req.body.type,
    release-date
    vote-avg
  });

  user.save((err, user) => {
    if (err) {
      res.redirect("/login?msg=500");
      return;
    }
    var username = encodeURIComponent(user.username);
    res.redirect(`/login?msg=created&user=${username}`);
  });
};
 */
