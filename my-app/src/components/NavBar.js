import React from "react";
import img1 from "./Multimedia/descarga (1).png";

function NavBar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      bg="dark"
      variant={"dark"}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={img1} id="logo-navbar" height={45}></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Popular Games
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Achievements
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Add Games
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    My Games
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Friends
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Edit Profile
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
