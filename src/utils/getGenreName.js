const newHeader = new Headers();
const url = "/assets/data/genres.json";
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

export const getGenreName = (genreId) =>
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
