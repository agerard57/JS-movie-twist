/**
 * Format the release date of the movie.
 *
 * @module utils
 * @param {string}           date   Is the date fed by the database.
 * @param {string}           format Is the format wanted ("fullDate | yearOnly").
 * @return {string}          Returns the formatted release date as a string.
 */

export const formatReleaseDate = (date, format) => {
    if (format === "fullDate") 
        return date.replace(new RegExp("-", "g"), "/"); // Will look like "yyyy-mm-dd"
     else if (format === "yearOnly") 
        return date.substring(0, 4); // Will loke like "yyyy"
      return date 
};