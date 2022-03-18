const mongoose = require("mongoose");

var movieSchema = mongoose.Schema({
  backdrop_path: { type: String, required: true },
  genre_ids: { type: Array, required: true },
  id: { type: Number },
  original_language: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  popularity: { type: Number },
  poster_path: { type: String },
  release_date: { type: String, required: true },
  title: { type: String, required: true },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

movieSchema.index({ slug: 1, userid: 1 }, { unique: true });

var MoviesModel = mongoose.model("movies", movieSchema);

module.exports = MoviesModel;
