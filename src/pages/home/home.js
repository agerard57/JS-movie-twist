import {
  getUserData,
  storeUserData,
  isUserLogged,
} from "/assets/scripts/utils/userDataStorage.js";

const pageTitle = document.querySelector("#page-title");
const authBtn = document.querySelector("#auth-button");

storeUserData();

if (isUserLogged) {
  authBtn.style.display = "none";
  pageTitle.innerHTML = `Welcome back ${getUserData("user")}!`;
} else {
  authBtn.style.display = "initial";
  pageTitle.innerHTML = "My Movie Database";
}
