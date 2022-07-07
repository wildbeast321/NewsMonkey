import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    let { modeName, mode, textcolor, handleMode } = this.props;
    return (
      <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">About </a></li>
              <li className="nav-item"><a className="nav-link" href="/">Buisness </a></li>
              <li className="nav-item"><a className="nav-link" href="/">Entertainment</a></li>
              <li className="nav-item"><a className="nav-link" href="/">General</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Health</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Science</a></li>
              <li className="nav-item"><a className="nav-link" href="/">Sports </a></li>
              <li className="nav-item"><a className="nav-link" href="/">Technology</a></li>                    
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={handleMode}
              />
              <label
                className={`form-check-label text-${textcolor}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {modeName}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
