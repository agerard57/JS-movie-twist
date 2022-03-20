import { isUserLogged } from "/assets/scripts/utils/userDataStorage.js";

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
const loggedMessage = () => {
  const parent = document.querySelector("body");
  while (parent.firstChild) parent.firstChild.remove();

  const divContainer = document.createElement("div");

  const title = document.createElement("H1");
  title.setAttribute("id", "page-title");
  title.setAttribute("class", "d-flex justify-content-center");
  title.innerHTML = "Already logged in";
  divContainer.appendChild(title);

  const redirectBtn = document.createElement("button");
  redirectBtn.setAttribute("class", "btn btn-secondary");
  redirectBtn.innerHTML = "Return to homepage";
  redirectBtn.addEventListener("click", () => {
    window.location.href = window.location.origin;
  });
  divContainer.appendChild(redirectBtn);

  document.body.appendChild(divContainer);
};

if (isUserLogged) loggedMessage();

for (const radioButton of radioButtons)
  radioButton.addEventListener("change", switchVisibility);

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

  case "duplicate":
    alert("ERROR\nUser already registered!");
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
