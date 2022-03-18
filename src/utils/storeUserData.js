const qs = new URLSearchParams(window.location.search);
const remembers = qs.get("remember");
const setItems = (storage) => {
  storage.setItem("user", qs.get("user"));
  storage.setItem("city", qs.get("city"));
  storage.setItem("type", qs.get("type"));
};

/**
 * Stores the user's username, it's city and the type of his account.
 *
 * @module utils
 * @return {void}       Depending on que "remember" query, either store in localStorage or in SessionStorage.
 */

export const storeUserData = () => {
  console.log("deez");
  if (remembers === "true") {
    setItems(localStorage);
    console.log("nuts1");
  } else if (remembers === "false") {
    setItems(sessionStorage);
    console.log("nuts2");
  }
};
