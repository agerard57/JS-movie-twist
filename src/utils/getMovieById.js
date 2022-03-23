const newHeader = new Headers();
const url = "/data/movies";
/* JSON Method
const url = "/assets/data/movies.json"; */
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

/**
 * Gets the movie by id then executes a function with the movie passed to the "action" function.
 *
 * @module utils
 * @param  {function}          action (movie)  -  Is the function that gets movie.
 * @return {void}              Executes the action, if the fetch works properly.
 */

export const getMovieById = (action) =>
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
          action(movie);
        })
    );
  });
