import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto">
            <li className="nav-link active" aria-current="page" href="#">
              Home
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span> Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
