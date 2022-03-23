import { createMoviePage } from "/assets/scripts/movie/movie.model.js";
import { getMovieById } from "/assets/scripts/utils/getMovieById.js";

getMovieById(createMoviePage);

// Back button
const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", (e) => {
  e.preventDefault();
  history.back();
});
