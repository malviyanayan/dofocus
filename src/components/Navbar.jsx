import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const navLinks = (
    <ul className="navbar-nav gap-2">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" end>
          <i className="fas fa-home me-2"></i> Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/notes">
          <i className="fas fa-sticky-note me-2"></i> Notes
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/todo">
          <i className="fas fa-tasks me-2"></i> To-Do
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/streak">
          <i className="fas fa-fire me-2"></i> Streak
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/help">
          <i className="fas fa-question-circle me-2"></i> Help
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Brand */}
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <i className="fas fa-bolt me-2"></i> DoFocus
      </Link>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Desktop links */}
      <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
        {navLinks}
      </div>

      {/* Right side button */}
      <div className="d-none d-lg-flex align-items-center">
        <Link className="btn btn-login" to="/signin">
          <i className="fas fa-sign-in-alt me-2"></i> Sign In
        </Link>
      </div>

      {/* Offcanvas for mobile */}
      <div
        className="offcanvas offcanvas-end custom-offcanvas d-lg-none"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <i className="fas fa-bars me-2"></i> Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {navLinks}
          <div className="mt-4">
            <Link className="btn btn-login w-100" to="/signin">
              <i className="fas fa-sign-in-alt me-2"></i> Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
