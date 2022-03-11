const section = document.querySelector("section");
const div = document.createElement("div");

export const createMoviePage = (movie) => {
  const card = `
            <div class="titles">
          <h3 class="title">${movie.title}</h3>
          <h5 class="original-title">${movie.original_title}</h5>
        </div>
        <div class="metadata-container">
          <span class="metadata-item item-date">2022</span>
          <span class="item-separator">|</span>
          <span class="metadata-item item-lang">jp</span>
          <span class="item-separator">|</span>
          <span class="metadata-item item-runningtime">1h 30m</span>
          <span class="item-separator">|</span>
          <span class="metadata-item item-note">8.3</span>
        </div>
        <div class="genres-container">
          <span>Action</span> <span class="item-separator">|</span>
          <span>Horror</span> <span class="item-separator">|</span>
          <span>Thriller</span>
        </div>
        <span class="overview"
          >A 17 year old finds out that his girlfriend is dying, so he sets out
          to give her an entire life, in the last year she has left.</span
        >
            `;
  div.innerHTML = card;
  div.classList.add("info-container", "fixed-bottom");
  section.appendChild(div);
  console.log("deez");
};
