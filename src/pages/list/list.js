import { createCard } from "/assets/scripts/list/createCard.model.js";
import {
  getIdFromUrl,
  getRequest,
  urlContains,
} from "/assets/scripts/utils/index.js";

const moviesUrl = "/data/movies";
const genresUrl = "/data/genres";

if (urlContains("list"))
  getRequest(moviesUrl, (movies) => {
    movies.forEach(createCard);
  });
else if (urlContains("genre")) {
  const pageTitle = document.querySelector("#page-title");
  const tabTitle = document.querySelector("title");

  // Gets the movies by their id
  getRequest(moviesUrl, (movies) => {
    movies.forEach((element) => {
      const genre = element.genre_ids.find((x) => x === getIdFromUrl);
      if (genre !== undefined) createCard(element);
    });
  });

  // Gets the genre name by it's id
  getRequest(
    genresUrl,
    (genre) => {
      pageTitle.innerHTML = genre.name;
      tabTitle.innerHTML = `MMDB - ${genre.name}`;
    },
    getIdFromUrl
  );
}
