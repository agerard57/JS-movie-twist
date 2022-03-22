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

const navbar = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">My Movie Database</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/list">List</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </a>
              <ul
                id="genres-list"
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              ></ul>
            </li>
            <li class="nav-item">
              <button
                id="add-movie-button"
                class="btn btn-outline-success"
                type="button"
              >
                Add a movie
              </button>
            </li>
            <li class="nav-item"></li>
          </ul>
          <div id="span-wrapper">
            <span id="weather" class=" text-muted">
            </span>
            <span class="nav-link text-muted text-center  d-none d-md-block">|</span>
            <span id="connected-as" class="nav-link text-muted text-center">
            </span>
            <span class="nav-link text-muted text-center d-none d-md-block">|</span>
          </div>
          <form class="d-flex">
            <input
              id="search-bar"
              class="form-control me-2"
              type="search"
              placeholder="Quick search"
              aria-label="Movie name"
            />
            <ul id="live-search" class="list-group form-control me-2 hide">   
            </ul>
            </form>
            <button id="auth-button" type="button"></button>
        </div>
      </div>
    </nav>
`;

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
      console.log(content);
    })();
  }

  /*   $.ajax({
    url: "/",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({ search: str }),
    success: function (result) {
      search.html(result.response);
    },
  }); */
});
