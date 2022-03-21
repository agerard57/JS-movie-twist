import { createCard } from "/assets/scripts/list/createCard.model.js";

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

new Promise((resolve) => {
  resolve(
    fetch(url, options)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        data.forEach(createCard);
      })
  );
});
