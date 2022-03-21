import { formatImageUrl } from "/assets/scripts/utils/formatImageUrl.js";
import { formatReleaseDate } from "/assets/scripts/utils/formatReleaseDate.js";
import { getGenreName } from "/assets/scripts/utils/getGenreName.js";

export const createMoviePage = (movie) => {
  // Poster
  const poster = document.querySelector("#poster");
  poster.src = formatImageUrl(movie.poster_path, "w342");

  // Title
  const title = document.querySelector("#title");
  title.innerHTML = movie.title;

  // Original title
  const originalTitle = document.querySelector("#original-title");
  originalTitle.innerHTML = movie.original_title;

  // Date
  const itemDate = document.querySelector("#item-date");
  itemDate.innerHTML = formatReleaseDate(movie.release_date, "yearOnly");

  // Film language
  const itemLang = document.querySelector("#item-lang");
  itemLang.innerHTML = movie.original_language;

  // Average note
  const avgNote = document.querySelector("#item-avgnote");
  avgNote.innerHTML = movie.vote_average;

  // Genres
  const genres = document.querySelector("#genres-container");
  movie.genre_ids.forEach((element) => {
    getGenreName(element).then((genreName) => {
      const genresSpan = document.createElement("span");
      genresSpan.setAttribute("class", "badge bg-success");
      genresSpan.innerHTML = genreName;
      genres.appendChild(genresSpan);
    });
  });
  // Overview
  const overview = document.querySelector("#overview");
  overview.innerHTML = movie.overview;

  // Background banner
  const bgBanner = document.querySelector("#bg-image");
  bgBanner.style.backgroundImage = `url(${formatImageUrl(
    movie.backdrop_path,
    "original"
  )})`;
};
