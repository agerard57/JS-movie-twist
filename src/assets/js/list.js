const btnContainer = document.querySelector("#button");
const btn = document.createElement("button");
btn.innerHTML = "Test";
btnContainer.appendChild(btn);
let newHeader = new Headers();

const url = "http://localhost:3000/assets/data/movies.json";
const options = {
  method: "GET",
  headers: newHeader,
  mode: "cors",
  cache: "default",
};

btn.addEventListener("click", () => {
  new Promise((resolve) => {
    resolve(
      fetch(url, options)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          data.forEach((element) => {
            var img = document.createElement("img");
            img.src = element.posterurl;

            btnContainer.appendChild(img);
          });
        })
    );
  });
});

var h = document.createElement("H1");
var t = document.createTextNode("HAAAA");
h.appendChild(t);

document.body.appendChild(h);
