import { createMoviePage } from "/assets/scripts/movie/movie.model.js";

const newHeader = new Headers();
const url = "/assets/data/movies.json";
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
      .then((data) => {
        let movieId = parseInt(
          window.location.href.substring(
            window.location.href.lastIndexOf("/") + 1
          ),
          10
        );
        let movie = data.find((x) => x.id === movieId);
        createMoviePage(movie);
      })
  );
});
