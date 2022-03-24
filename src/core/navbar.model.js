export const navbar = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">My Movie Database</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a id="home-a" class="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/list" id="list-a">List</a>
            </li>
            <li class="nav-item dropdown">
              <a
                id="genre-a"
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" 
              >
                Genre
              </a>
              <ul
                id="genres-list"
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              ></ul>
            </li>
            <li class="nav-item">
              <button
                id="add-movie-button"
                class="btn btn-outline-success"
                type="button"
              >
                Add a movie
              </button>
            </li>
            <li class="nav-item"></li>
          </ul>
          <div id="span-wrapper">
            <span id="weather" class="text-muted">
            </span>
            <span class="nav-link text-muted text-center  d-none d-md-block">|</span>
            <span id="connected-as" class="nav-link text-muted text-center">
            </span>
            <span class="nav-link text-muted text-center d-none d-md-block">|</span>
          </div>
          <form class="d-flex">
            <input
              id="search-bar"
              class="form-control me-2"
              type="search"
              placeholder="Quick search"
              aria-label="Movie name"
            />
            <ul id="live-search" class="list-group form-control me-2 hide">   
            </ul>
            </form>
            <button id="auth-button" type="button"></button>
        </div>
      </div>
    </nav>
`;
