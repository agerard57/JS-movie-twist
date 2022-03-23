/**
 * Returns the id present in the URL.
 *
 * e.g.: Gets "10402" from "/genre/10402".
 *
 * @module utils
 * @return {String}   Returns the id.
 */

export const getIdFromUrl = parseInt(
  window.location.href.substring(window.location.href.lastIndexOf("/") + 1),
  10
);
