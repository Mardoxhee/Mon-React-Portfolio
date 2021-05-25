import React from "react";

const NavBar = () => {
  return (
    <div class="navbar__container">
      <div class="hide-on-small">
        <a class="navbar-brand log" href="#">
          M.LUVIKI
        </a>{" "}
      </div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
        <a class="navbar-brand second" href=""></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Accueil <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projets">
                Projets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
