const qs = new URLSearchParams(window.location.search);

const reloadPage = () => (location.href = location.href.split(/[?#]/)[0]);

const alertTitle = "ERROR\n";
const errorMsg = qs.get("msg");
const successMsg = qs.get("success");
const subject = qs.get("subject");

// TODO UPDATED CASE
const alertMessagesList = {
  500: "Something went wrong!",

  added: `Added!\n${subject} has been successfully added!`,

  duplicate: `${subject} already exists!`,

  empty: `${subject} field empty!`,

  illegalChars:
    "Username contains illegal characters\n(only alphanumerical & underscores are allowed)",

  length: `${subject} must be between 5 and 30 characters!`,

  password: "Invalid password!",

  passwordEmpty: "Password field empty!",

  username: `User "${subject}"not found!`,

  usernameLength: "Username must be between 5 and 30 characters!",
};
/**
 * Displays an alert window depending on the message given by query.
 *
 * @module utils
 * @return {void}          Triggers an alert.
 */

export const alertHandler = () => {
  // Checks that there is the success or errorMsg query
  if (qs.has("success") || qs.has("msg"))
    if (successMsg in alertMessagesList) {
      // If one alertMessage from the list matches with successMsg
      alert(alertMessagesList[successMsg]);
      reloadPage();
      // If one alertMessage from the list matches with errorMsg
    } else if (errorMsg in alertMessagesList) {
      alert(alertTitle + alertMessagesList[errorMsg]);
      reloadPage();
      // Error doesn't /  shouldn't exist
    } else {
      alert(alertTitle + "Your error doesn't exist...");
      reloadPage();
    }
};
