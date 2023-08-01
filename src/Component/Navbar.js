import React from "react";
import "./Navbar.css";
import myLogo from "../Component/payrole.png";

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        <img src={myLogo} alt="Payrole Logo" className="navbar-logo" />
        <span className="navbar-text">Payrole</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              Home
            </div>
          </li>
          <li className="nav-item-dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Personal
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Accounts
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Loans
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Investments
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Insurance
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Business
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Accounts
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                MSME
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Corporate
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
