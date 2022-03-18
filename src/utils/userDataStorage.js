const qs = new URLSearchParams(window.location.search);
const remembers = qs.get("remember");
const queries = ["user", "city", "type"];

const setItems = (storage) =>
  queries.forEach((query) => storage.setItem(query, qs.get(query)));

const refresh = () => (window.location.href = "/");

/**
 * Stores the user's username, it's city and the type of his account.
 *
 * @module utils/userDataStorage
 * @return {void} Depending on que "remember" query, either store in localStorage or in SessionStorage.
 */

const storeUserData = () => {
  if (remembers === "true") {
    setItems(localStorage);
    refresh();
  } else if (remembers === "false") {
    setItems(sessionStorage);
    refresh();
  }
};

/**
 * Find the data in localStorage then in sessionStorage.
 *
 * @module utils/userDataStorage
 * @param {string}                itemName Name of the wanted item.
 * @return {string | undefined}   Returns the value found or undefined if not existing.
 */

const getUserData = (itemName) => {
  const getItem = (storage) => storage.getItem(itemName);

  if (getItem(localStorage) !== null) return getItem(localStorage);
  else if (getItem(sessionStorage) !== null) return getItem(sessionStorage);
  return null;
};

/**
 * Deletes the user's username, it's city and the type of his account.
 *
 * @module utils/userDataStorage
 * @return {void} Delete from both localStorage or in SessionStorage.
 */

const deleteUserData = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export { deleteUserData, getUserData, storeUserData };
