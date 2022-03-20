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
  var genresList = [];
  movie.genre_ids.forEach((element) => genresList.push(getGenreName(element)));
  Promise.all(genresList).then((values) => {
    genres.innerHTML = values.join(" | ");
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

/* TODO list 
  - Average note in color
  - Better html display by default
  - See what data has to be displayed next
  - Make the whole thing responsive!
  - Add indexes on forEach loops 
*/
