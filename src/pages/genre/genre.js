import { createCard } from "/assets/scripts/genre/genre.model.js";
import { getGenreName } from "/assets/scripts/utils/getGenreName.js";

const pageTitle = document.querySelector("#page-title");
const newHeader = new Headers();
const url = "data/movies";
/* JSON Method
const url = "/assets/data/movies.json"; */
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};
const genreId = parseInt(
  window.location.href.substring(window.location.href.lastIndexOf("/") + 1),
  10
);

new Promise((resolve) => {
  resolve(
    fetch(url, options)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data.forEach((element) => {
          var genre = element.genre_ids.find((x) => x === genreId);
          if (genre !== undefined) createCard(element);
        });
      })
  );
});

getGenreName(genreId).then((genreName) => (pageTitle.innerHTML = genreName));
