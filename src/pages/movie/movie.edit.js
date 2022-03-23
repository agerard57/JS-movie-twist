import { getIdFromUrl } from "/assets/scripts/utils/getIdFromUrl.js";
import { getRequest } from "/assets/scripts/utils/getRequest.js";

const inputTitle = document.querySelector("#title");
const inputOriginalTitle = document.querySelector("#originaltitle");
const inputGenre = document.querySelector("#genres");
const inputOverview = document.querySelector("#overview");
const inputReleaseDate = document.querySelector("#releasedate");
const inputAverageNote = document.querySelector("#avgvote");
const inputLang = document.querySelector("#lang");
const formBtn = document.querySelector("#form-button");
const tabTitle = document.querySelector("title");
const pageTitle = document.querySelector("#page-title");
const updateText = "Update movie";

export const movieFormEdit = (updateOverviewMsg) => {
  getRequest(
    "/data/movies",
    (movie) => {
      pageTitle.innerHTML = updateText;
      formBtn.innerHTML = updateText;
      tabTitle.innerHTML = `MMDB - ${updateText}`;

      inputTitle.value = movie.title;
      inputOriginalTitle.value = movie.original_title;
      inputReleaseDate.value = movie.release_date;
      inputAverageNote.value = movie.vote_average;
      inputLang.value = movie.original_language.toUpperCase();
      inputOverview.value = movie.overview;

      const genresGroup = document.createElement("optgroup");
      genresGroup.setAttribute("id", "genres-list");
      genresGroup.setAttribute("label", "GENRES");

      getRequest("/data/genres", (genresFromList) => {
        // Returns an array with all movie's genre(s)'s name
        const filtered = genresFromList
          .filter((genreFromList) =>
            movie.genre_ids.find((x) => x === genreFromList.id)
          )
          .map((x) => x.name);

        genresFromList.forEach((genreFromList) => {
          if (filtered.includes(genreFromList.name))
            genresGroup.innerHTML += `<option value=${genreFromList.id} selected>${genreFromList.name}</option>`;
          else
            genresGroup.innerHTML += `<option value=${genreFromList.id}>${genreFromList.name}</option>`;
        });
      });
      updateOverviewMsg(inputOverview);

      inputGenre.appendChild(genresGroup);
    },
    getIdFromUrl
  );
};
