const mongoose = require("mongoose");

const placeholderPosterUrl =
  "https://critics.io/img/movies/poster-placeholder.png";
const placeholderBackdropUrl =
  "http://placehold.jp/1c1c1c/ffffff/1920x1080.png?text=Beautiful%20background";

const movieSchema = mongoose.Schema(
  {
    backdrop_path: { type: String, default: placeholderBackdropUrl },
    genre_ids: { type: Array, required: true },
    id: { type: Number, default: Date.now }, // Date.now as id is a clever way to set unique identifiers
    original_language: {
      type: String,
      required: true,
      get: (lang) => lang.toUpperCase(),
    },
    original_title: { type: String, required: true },
    overview: { type: String, required: true },
    popularity: { type: Number },
    poster_path: { type: String, default: placeholderPosterUrl },
    release_date: { type: String, required: true },
    title: { type: String, required: true },
    vote_average: { type: Number },
    vote_count: { type: Number },
  },
  { toJSON: { getters: true } }
);

movieSchema.index({ id: 1 }, { unique: true });

const MoviesModel = mongoose.model("movies", movieSchema);

module.exports = MoviesModel;
