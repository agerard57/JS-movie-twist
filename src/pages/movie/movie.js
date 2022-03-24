import { movieDisplayPage } from "/assets/scripts/movie/movie.model.js";
import { getIdFromUrl, getRequest } from "/assets/scripts/utils/index.js";

getRequest(
  "/data/movies",
  (movie) => {
    movieDisplayPage(movie);
  },
  getIdFromUrl
);

// Back button
const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", (e) => {
  e.preventDefault();
  history.back();
});
