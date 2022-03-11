const cards = document.querySelector("#cards");

export const createCard = (element) => {
  const imgUrl = (size) => {
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
    const baseUrl = "https://image.tmdb.org/t/p/";
    return baseUrl + size + element.backdrop_path;
  };
  const truncateValue = 60;
  const shortenedStoryline =
    element.overview.length > truncateValue
      ? `${element.overview.substring(0, truncateValue)}...`
      : element.overview;
  const movieReleaseDate =
    "Release date: " + element.release_date.replace(new RegExp("-", "g"), "/");
  // card div
  const card = document.createElement("div");
  card.setAttribute("class", "card bg-dark text-white");
  card.addEventListener("click", () => {
    window.location.href = window.location.href.replace(
      "/list",
      `/id/${element.id}`
    );
  });

  // banner image
  const banner = document.createElement("img");
  banner.setAttribute("class", "card-img");
  banner.src = imgUrl("w780");
  banner.alt = `${element.title} banner`;
  card.appendChild(banner);

  // card overlay div
  const cardOverlay = document.createElement("div");
  cardOverlay.setAttribute(
    "class",
    "card-img-overlay h-100 d-flex flex-column justify-content-end deez"
  );
  card.appendChild(cardOverlay);

  // title
  const title = document.createElement("h5");
  title.setAttribute("class", "card-title");
  title.innerText = element.title;
  cardOverlay.appendChild(title);

  // synopsis
  const synopsis = document.createElement("p");
  synopsis.setAttribute("class", "card-text");
  synopsis.innerText = shortenedStoryline;
  cardOverlay.appendChild(synopsis);

  // release date
  const releaseDate = document.createElement("p");
  releaseDate.setAttribute("class", "card-text");
  releaseDate.innerText = movieReleaseDate;
  cardOverlay.appendChild(releaseDate);

  cards.appendChild(card);

  // Another way to implement this
  /*
    const card = `
            <div class="card bg-dark text-white">
              <img class="card-img" src="${imgUrl("w780")}" alt="Card image" />
              <div class="card-img-overlay">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${shortenedStoryline}</p>
                <p class="card-text">${movieReleaseDate}</p>
              </div>
            </div>
            `; 
    div.innerHTML = card;   
    div.classList.add("mx-2");
    cards.appendChild(div);
  */
};
