import {
  storeUserData,
  getUserData,
} from "/assets/scripts/utils/userDataStorage.js";

const authBtn = document.querySelector("#auth-button");

storeUserData();
if (getUserData("user") === null) authBtn.style.display = "initial";
else authBtn.style.display = "none";
