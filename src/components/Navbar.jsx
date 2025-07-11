import { NavLink } from "react-router-dom";
import profilePic from "../assets/default_icon.png";
import GetStarted from "./login_registor/GetStarted";
import { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // simulate login

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="fa-solid fa-bolt text-warning"></i>
          <span className="fw-semibold fs-4">DoFocus</span>
        </NavLink>

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

        <div
          className="collapse navbar-collapse justify-content-end mt-2 mt-lg-0 pt-2 pt-lg-0"
          id="navbarNavAltMarkup"
          style={{
            backgroundColor: "#212529",
            borderTop: "1px solid #343a40",
            zIndex: 99,
          }}
        >
          <div className="navbar-nav align-items-lg-center gap-2 gap-lg-3 w-100">
            <NavLink className="nav-link w-100 text-center text-lg-start" to="/">
              <i className="fa-solid fa-house me-1"></i>Home
            </NavLink>
            <NavLink className="nav-link w-100 text-center text-lg-start" to="/notes">
              <i className="fa-solid fa-note-sticky me-1"></i>Notes
            </NavLink>
            <NavLink className="nav-link w-100 text-center text-lg-start" to="/streak">
              <i className="fa-solid fa-fire me-1"></i>Streak
            </NavLink>
            <NavLink className="nav-link w-100 text-center text-lg-start" to="/todo">
              <i className="fa-solid fa-list-check me-1"></i>Todo
            </NavLink>
            <NavLink className="nav-link w-100 text-center text-lg-start" to="/help">
              <i className="fa-solid fa-circle-question me-1"></i>Help
            </NavLink>

            {isLoggedIn ? (
              <div className="nav-item dropdown w-100 text-center text-lg-start">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-center justify-content-lg-start"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="rounded-circle border border-light"
                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user me-2"></i>Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cog me-2"></i>Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt me-2"></i>Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="w-100 d-flex justify-content-center mt-3">
                <GetStarted />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
