import { movieFormEdit } from "/assets/scripts/movie/movie.edit.js";
import { urlContains } from "/assets/scripts/utils/urlContains.js";

const inputOverview = document.querySelector("#overview");
const inputOverviewMsg = document.querySelector("#overview-msg");

const updateOverviewMsg = (target) => {
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;
  inputOverviewMsg.innerHTML = `${currentLength} / ${maxLength}`;
};

if (urlContains("edit")) {
  movieFormEdit();
  updateOverviewMsg(inputOverview);
}

inputOverview.addEventListener("input", (e) => {
  updateOverviewMsg(e.target);
});
