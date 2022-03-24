require("./src/server/app");

// TODO !!! Make repo public, you'll know when !!! TODO //
// TODO BETTER NAMING FOR NAVBAR.MODULE            TODO //
// TODO Modals                                     TODO //
// TODO Remove ALL unused "req"s                   TODO //
// TODO Add indexes on forEach loops               TODO //
// TODO Middleware thats checks if id exists       TODO //
// TODO Change all routers to app?                 TODO //
// TODO Move movie form                            TODO //
// TODO DO Readme                                  TODO //
// TODO Update forms for login/signup (add args?)  TODO //
// TODO Add password verification                  TODO //
// TODO Put this back on please                    TODO //
// TODO² Don't forget to do a search page and new route page TODO //
// TODO  Reset the database                        TODO //

/*  TODO Transform this into a component
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
    window.location.href = "/";
  });
  divContainer.appendChild(redirectBtn);

  document.body.appendChild(divContainer);
}; */
