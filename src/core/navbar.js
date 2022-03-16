const newHeader = new Headers();
const url = "/assets/data/genres.json";
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

const navbar = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
   <div class="container-fluid">
      <a class="navbar-brand" href="#">My Movie Database</a>
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
               <ul id="genres-list" class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
            </li>
            <li class="nav-item">
               <a class="nav-link disabled" href="#">Add movie</a>
            </li>
            <li class="nav-item">
               <a class="nav-link disabled" href="#">Delete movie</a>
            </li>
         </ul>
         <form class="d-flex">
            <input
               class="form-control me-2"
               type="search"
               placeholder="Search"
               aria-label="Movie name"
               />
            <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
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
            window.location.href =
              window.location.origin + `/genre/${genre.id}`;
          });

          ulGenresList.appendChild(liGenresList);
        });
      })
  );
});

document.body.insertAdjacentHTML("afterbegin", navbar);

// TODO BETTER NAMING FOR NAVBAR.MODULE
// TODO REGROUP DUPLICATE FILES (genres+list)
