import { NavLink } from "react-router-dom";
import profilePic from "../assets/default_icon.png";
import GetStarted from "./login_registor/GetStarted";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm"
      style={{ height: "15vh", borderBottom: "1px solid #343a40" }}
    >
      <NavLink
        className="navbar-brand fw-semibold fs-4 d-flex align-items-center gap-2"
        to="/"
      >
        <i className="fa-solid fa-bolt text-warning"></i>
        DoFocus
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav align-items-lg-center gap-lg-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="fa-solid fa-house me-2"></i>Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/notes">
              <i className="fa-solid fa-note-sticky me-2"></i>Notes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/streak">
              <i className="fa-solid fa-fire me-2"></i>Streak
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todo">
              <i className="fa-solid fa-list-check me-2"></i>Todo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/help">
              <i className="fa-solid fa-circle-question me-2"></i>Help
            </NavLink>
          </li>

          {/* Avatar Dropdown */}
          {!true ? <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="userDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-circle me-2 border border-danger bg-white"
                style={{ width: "40px", height: "40px", objectFit: "cover" }}
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user me-2"></i> Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cog me-2"></i> Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-sign-out-alt me-2"></i> Logout
                </a>
              </li>
            </ul>
          </li> : <GetStarted />}
        
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
