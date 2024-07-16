import React from "react";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent mt-4">
        <div className="container">
          <img
            src="src/assets/Images/logo.png"
            alt="marvel word"
            className="w-5"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#contacts">
                  Contacts
                </a>
              </li>
            </ul>

            <button className="startBtn">Get Started</button>
          </div>
        </div>
      </nav>
    </>
  );
}
