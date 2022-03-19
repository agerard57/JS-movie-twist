import {
  storeUserData,
  getUserData,
} from "/assets/scripts/utils/userDataStorage.js";

const pageTitle = document.querySelector("#page-title");
const authBtn = document.querySelector("#auth-button");

storeUserData();

if (getUserData("user") === null) {
  authBtn.style.display = "initial";
  pageTitle.innerHTML = "My Movie Database";
} else {
  authBtn.style.display = "none";
  pageTitle.innerHTML = `Welcome back ${getUserData("user")}!`;
}
