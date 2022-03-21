import { createCard } from "/assets/scripts/list/createCard.model.js";
import { getGenreName } from "/assets/scripts/utils/getGenreName.js";

const urlContains = (string) => window.location.href.includes(string);

const newHeader = new Headers();
const url = "/data/movies";
/* JSON Method
const url = "/assets/data/movies.json"; */
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

if (urlContains("list"))
  new Promise((resolve) => {
    resolve(
      fetch(url, options)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          data.forEach(createCard);
        })
    );
  });
else if (urlContains("genre")) {
  const pageTitle = document.querySelector("#page-title");
  const tabTitle = document.querySelector("title");
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

  getGenreName(genreId).then((genreName) => {
    pageTitle.innerHTML = genreName;
    tabTitle.innerHTML = `MMDB - ${genreName}`;
  });
}
