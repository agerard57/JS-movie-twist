/**
 * Verify if the url contains the input string.
 *
 * Function that can be useful for loading different content on the same html page (e.g. add/update - list/genre/search).
 *
 * @module utils
 * @param  {String}    checkedString   Checks if it contains this string.
 * @return {Boolean}                   Returns true or false.
 */

export const urlContains = (string) => window.location.href.includes(string);
