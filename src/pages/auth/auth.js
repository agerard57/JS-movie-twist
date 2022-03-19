const qs = new URLSearchParams(window.location.search);
const radioButtons = document.querySelectorAll("input[name='btnradio']");
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
const reloadPage = () => (location.href = location.href.split(/[?#]/)[0]);
const switchVisibility = () => {
  signupForm.style.display =
    signupForm.style.display === "none" ? "block" : "none";
  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
};

for (const radioButton of radioButtons)
  radioButton.addEventListener("change", switchVisibility);

window.addEventListener("DOMContentLoaded", () => {
  switch (qs.get("msg")) {
    case "500":
      alert("ERROR 500\nSomething went wrong!");
      reloadPage();
      break;

    case "created":
      alert(
        `User created!\nA new account for ${qs.get(
          "user"
        )} has succesfully been made!`
      );
      reloadPage();
      break;

    case "username":
      alert("ERROR\nUser not found!");
      reloadPage();
      break;

    case "password":
      alert("ERROR\nInvalid password!");
      reloadPage();
      break;

    default:
      break;
  }
});
