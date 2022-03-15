const newHeader = new Headers();
const url = "/assets/data/genres.json";
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

/**
 * Get the corresponding genre from the id.
 *
 * @module utils
 * @param {string}           genreId  Is the genre id fed in by the "movies" database.
 * @return {Promise}          Returns the genre name in a promise.
 */

export const genresList = (genreId) =>
  new Promise((resolve) => {
    resolve(
      fetch(url, options)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((genres) => {
          let genre = genres.find((x) => x.id === genreId);
          resolve(genre.name);
          return genre.name;
        })
    );
  });
// TODO WRITE NAVBAR.MODULE
