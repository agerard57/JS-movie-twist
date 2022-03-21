import { UserData } from "/assets/class/userData.class.js";

const qs = new URLSearchParams(window.location.search);

const setItems = (storage, user) => {
  storage.setItem("city", user.city);
  storage.setItem("type", user.type);
  storage.setItem("user", user.username);
};

const refresh = () => (window.location.href = "/");

/**
 * Deletes the user's username, it's city and the type of his account.
 *
 * @module utils/userDataStorage
 * @return {void}                 Delete from both localStorage or in SessionStorage.
 */

const deleteUserData = () => {
  const prompt = confirm("Are you sure you want to Logout ?");
  if (prompt) {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
    alert("You are now logged off");
  }
};

/**
 * Find the data in localStorage then in sessionStorage.
 *
 * @module utils/userDataStorage
 * @param {String}                itemName Name of the wanted item.
 * @return {String | undefined}   Returns the value found or undefined if not existing.
 */

const getUserData = (itemName) => {
  const getItem = (storage) => storage.getItem(itemName);

  if (getItem(localStorage) !== null) return getItem(localStorage);
  else if (getItem(sessionStorage) !== null) return getItem(sessionStorage);
  return null;
};

/**
 * Stores the user's username, it's city and the type of his account.
 *
 * @module utils/userDataStorage
 * @return {void}                 Depending on que "remember" query, either store in localStorage or in SessionStorage.
 */

const storeUserData = () => {
  const queryResultsArray = [];
  const queries = ["user", "city", "type", "remember"];

  queries.forEach((query) => queryResultsArray.push(qs.get(query)));
  if (!queryResultsArray.includes(null)) {
    const user = new UserData(...queryResultsArray);
    if (user.remembers === "true") {
      setItems(localStorage, user);
      refresh();
    } else if (user.remembers === "false") {
      setItems(sessionStorage, user);
      refresh();
    }
  }
};

/**
 * Boolean that checks if user is admin.
 *
 * @module utils/userDataStorage
 * @return {Boolean}              Returns either true if admin or false if not.
 */

const isUserAdmin = getUserData("type") === "ADMIN";

/**
 * Boolean that checks if user is logged.
 *
 * @module utils/userDataStorage
 * @return {Boolean}              Returns either true if logged or false if not.
 */

const isUserLogged = getUserData("user") !== null;

export {
  deleteUserData,
  getUserData,
  storeUserData,
  isUserAdmin,
  isUserLogged,
};
