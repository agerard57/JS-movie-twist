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

/**
 * Get the corresponding genre from the id.
 *
 * @module utils
 * @param {String}           genreId  Is the genre id fed in by the "movies" database.
 * @return {Promise}          Returns the genre name in a promise.
 */

export const getGenreList = (genreId) =>
  new Promise((resolve) => {
    resolve(
      fetch(url, options)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((genres) => {
          let genre = genres.find((x) => x.id === genreId);
          return genre.name;
        })
    );
  });

// TODO MAKE THIS MORE GENERIC LIKE MOVIEBYID
/* GET ALL GENRES 
const filtered = genres.filter((genreFromList) =>
  genre_ids.find((x) => x === genreFromList.id)
).map(x=> x.name);
 */
