import { movieFormEdit } from "/assets/scripts/movieForm/movie.edit.js";
import { getRequest, urlContains } from "/assets/scripts/utils/index.js";

const inputOverview = document.querySelector("#overview");
const inputOverviewMsg = document.querySelector("#overview-msg");

// //////////////////////////////////////////////////
//  Updates the character counter under the overview
const updateOverviewMsg = (target) => {
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  inputOverviewMsg.innerHTML = `${currentLength} / ${maxLength}`;
};

inputOverview.addEventListener("input", (e) => {
  updateOverviewMsg(e.target);
});

// //////////////////////
// Load "add movie" page
if (urlContains("add")) {
  const genresGroup = document.createElement("optgroup");
  genresGroup.setAttribute("id", "genres-list");
  genresGroup.setAttribute("label", "GENRES");

  const inputGenre = document.querySelector("#genres");

  getRequest("/data/genres", (genresFromList) => {
    genresFromList.forEach((genreFromList) => {
      genresGroup.innerHTML += `<option value=${genreFromList.id}>${genreFromList.name}</option>`;
    });
  });
  inputGenre.appendChild(genresGroup);
}

// ///////////////////////
// Load "edit movie" page
if (urlContains("edit")) movieFormEdit(updateOverviewMsg);
