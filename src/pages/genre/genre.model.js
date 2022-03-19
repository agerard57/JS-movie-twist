import { formatImageUrl } from "/assets/scripts/utils/formatImageUrl.js";
import { formatReleaseDate } from "/assets/scripts/utils/formatReleaseDate.js";

const cards = document.querySelector("#cards");

export const createCard = (element) => {
  const truncateValue = 60;
  const shortenedStoryline =
    element.overview.length > truncateValue
      ? `${element.overview.substring(0, truncateValue)}…`
      : element.overview;

  const card = document.createElement("div");
  card.setAttribute("class", "card bg-dark text-white");

  // event listener
  card.addEventListener("click", () => {
    window.location.href = window.location.origin + `/id/${element.id}`; //TODO REPLACE TO WINDOW ORIGIN
  });

  // banner image
  const banner = document.createElement("img");
  banner.setAttribute("class", "card-img");
  banner.src = formatImageUrl(element.backdrop_path, "w780");
  banner.alt = `${element.title} banner`;
  card.appendChild(banner);

  // card overlay div
  const cardOverlay = document.createElement("div");
  cardOverlay.setAttribute(
    "class",
    "card-img-overlay h-100 d-none d-sm-flex flex-column justify-content-end dark-fg"
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
  releaseDate.innerText =
    "Release date: " + formatReleaseDate(element.release_date, "fullDate");
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
