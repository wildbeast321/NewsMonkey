import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          NewsMonkey
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Business"
              >
                Business{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Entertainment"
              >
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Health"
              >
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Science"
              >
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Sports"
              >
                Sports{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/Technology"
              >
                Technology
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Country
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={props.handlecountryin}
                  >
                    India
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={props.handlecountryus}
                  >
                    United States Of America
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={props.handlecountryjp}
                  >
                    Japan
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.handleMode}
            />
            <label
              className={`form-check-label text-${props.textcolor}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.modeName}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
