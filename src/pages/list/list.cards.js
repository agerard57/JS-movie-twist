export const createCard = (element) => {
  let cards = document.querySelector("#cards");
  let div = document.createElement("div");
  let imgUrl = (size) => {
    // size chart found here: https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
    // |  poster  | backdrop |
    // | :------: | :------: |
    // |    w92   |   w300   |
    // |   w154   |   w780   |
    // |   w185   |  w1280   |
    // |   w342   |   w300   |
    // |   w500   | original |
    // |   w780   | -------- |
    // | original | -------- |
    let baseUrl = "https://image.tmdb.org/t/p/";
    return baseUrl + size + element.backdrop_path;
  };
  let truncateValue = 50;
  let shortenedStoryline =
    element.overview.length > truncateValue
      ? `${element.overview.substring(0, truncateValue)}...`
      : element.overview;
  let formatDate = element.release_date.replace(new RegExp("-", "g"), "/");
  const card = `
          <div class="card bg-dark text-white">
            <img class="card-img" src="${imgUrl("w780")}" alt="Card image" />
            <div class="card-img-overlay">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${shortenedStoryline}</p>
              <p class="card-text"> Release date: ${formatDate}</p>
            </div>
          </div>
          `;
  div.innerHTML = card;
  div.classList.add("mx-2");
  cards.appendChild(div);
};

/* 
      
      // console stuff
      
      movieDB.forEach(createCard);
      
      function createCard(element) {
        // card
        var card = document.createElement("div");
        card.setAttribute("class", "movie-card");
        card.style.backgroundImage = element.background;
      
        // title
        var title = document.createElement("h1");
        title.innerText = element.title;
        card.appendChild(title);

        // synopsis
        var synopsis = document.createElement("p");
        synopsis.innerText = element.synopsis;
        card.appendChild(synopsis);
      
        document.body.appendChild(card);
      } */
