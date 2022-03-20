/**
 * Format the release date of the movie.
 *
 * @module utils
 * @param {String}           date   Is the date fed by the database.
 * @param {String}           format Is the format wanted ("fullDate | yearOnly").
 * @return {String}          Returns the formatted release date as a string.
 */

export const formatReleaseDate = (date, format) => {
  if (format === "fullDate") return date.replace(new RegExp("-", "g"), "/");
  // Will look like "yyyy-mm-dd"
  else if (format === "yearOnly") return date.substring(0, 4); // Will loke like "yyyy"
  return date;
};
