import { isUserAdmin } from "/assets/scripts/utils/userDataStorage.js";

export const adminButtons = (card, element) => {
  if (isUserAdmin) {
    // buttons div
    const buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("id", "buttons-div");
    buttonsDiv.setAttribute("class", "position-absolute top-0 end-0");

    // edit svg
    const editSvgDiv = document.createElement("div");
    editSvgDiv.setAttribute("id", "edit-svg");
    const editSvg = `
    <svg class="svg-button" fill="white" width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
    </svg>`;
    editSvgDiv.innerHTML = editSvg;
    buttonsDiv.appendChild(editSvgDiv);

    // trash svg
    const trashSvgDiv = document.createElement("div");
    trashSvgDiv.setAttribute("id", "trash-svg");
    const trashSvg = `
    <svg class="svg-button" fill="white" width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    </svg>`;
    trashSvgDiv.innerHTML = trashSvg;
    buttonsDiv.appendChild(trashSvgDiv);

    card.appendChild(buttonsDiv);

    // event listeners
    editSvgDiv.addEventListener("click", () => {
      //TODO
    });

    trashSvgDiv.addEventListener("click", () => {
      document.querySelector("#modal").style.display = "inherit";

      document.querySelector(
        "#delete-message"
      ).innerHTML = `Do you really want to delete ${element.title}?`;

      document.querySelector("#delete-button").addEventListener("click", () => {
        card.remove();
        (async () => {
          await fetch(`/movie/delete/${element.id}`, { method: "DELETE" });
        })();
        document.querySelector("#modal").style.display = "none";
      });

      document.querySelectorAll(".close-modal").forEach((item) => {
        item.addEventListener("click", () => {
          document.querySelector("#modal").style.display = "none";
        });
      });
    });
  }
};
