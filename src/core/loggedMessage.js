import { isUserLogged } from "/assets/scripts/utils/index.js";

if (isUserLogged) {
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
    window.location.href = "/";
  });
  divContainer.appendChild(redirectBtn);

  document.body.appendChild(divContainer);
}
