const radioButtons = document.querySelectorAll("input[name='btnradio']");
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");

const switchVisibility = () => {
  signupForm.style.display =
    signupForm.style.display === "none" ? "block" : "none";
  loginForm.style.display =
    loginForm.style.display === "none" ? "block" : "none";
};

for (const radioButton of radioButtons)
  radioButton.addEventListener("change", switchVisibility);
