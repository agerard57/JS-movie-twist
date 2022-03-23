import { navbar } from "/assets/scripts/navbar.model.js";
import { getWeather } from "/assets/scripts/utils/getWeather.js";
import {
  deleteUserData,
  getUserData,
  isUserAdmin,
  isUserLogged,
} from "/assets/scripts/utils/userDataStorage.js";

const newHeader = new Headers();
const url = "/data/genres";
/* JSON Method
const url = "/assets/data/genres.json"; */
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

new Promise((resolve) => {
  resolve(
    fetch(url, options)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((genres) => {
        genres.forEach((genre) => {
          const ulGenresList = document.querySelector("#genres-list");
          const liGenresList = document.createElement("li");
          const listElement = document.createElement("a");

          listElement.setAttribute("class", "dropdown-item");
          listElement.innerHTML = genre.name;
          liGenresList.appendChild(listElement);

          listElement.addEventListener("click", () => {
            window.location.href = `/genre/${genre.id}`;
          });

          ulGenresList.appendChild(liGenresList);
        });
      })
  );
});

document.body.insertAdjacentHTML("afterbegin", navbar);

const authBtn = document.querySelector("#auth-button");
const addMovieBtn = document.querySelector("#add-movie-button");
const connectedAs = document.querySelector("#connected-as");
const spanWrapper = document.querySelector("#span-wrapper");
const weather = document.querySelector("#weather");
const loggedNavbarFeatures = () => {
  spanWrapper.style.display = "inherit";
  connectedAs.innerHTML = `Connected as ${getUserData("user")}`;
  weather.innerHTML = `${getWeather()}`;
  authBtn.setAttribute("class", "btn btn-outline-danger");
  authBtn.innerHTML = "Logout";
  authBtn.addEventListener("click", () => {
    deleteUserData();
  });
  addMovieBtn.addEventListener("click", () => {
    window.location.href = "/movie/add";
  });
};
const notLoggedNavbarFeatures = () => {
  authBtn.setAttribute("class", "btn btn-outline-primary");
  authBtn.innerHTML = "Login";
  authBtn.addEventListener("click", () => {
    window.location.href = "/login";
  });
  spanWrapper.style.display = "none";
};

if (isUserLogged) loggedNavbarFeatures();
else notLoggedNavbarFeatures();

if (isUserAdmin) addMovieBtn.style.display = "initial";
else addMovieBtn.style.display = "none";

const searchBar = document.querySelector("#search-bar");
const searchResults = document.querySelector("#live-search");
searchBar.addEventListener("keyup", () => {
  const searchBarValue = searchBar.value;
  if (searchBarValue.length === 0) searchResults.classList.add("hide");
  else {
    searchResults.classList.remove("hide");

    (async () => {
      const rawResponse = await fetch("/search", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: searchBarValue }),
      });
      const content = await rawResponse.json();
      searchResults.innerHTML = content.response;
    })();
  }
});
