import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bgImage from "./bg2.jpg";

import "./Home.css";

const Navbar = () => {
  const [foodname, setFoodName] = useState("");

  return (
    <div className="page-body">

      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="tomato">
              <p>
                <b>APPAYON</b>
              </p>
            </div>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navs">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item-left">
                    <Link to="/home" className="nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item-left">
                    <Link to="/menu" className="nav-link">
                      Menu
                    </Link>
                  </li>

                  <li className="nav-item-left dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/action" className="dropdown-item">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to="/another" className="dropdown-item">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="/contact" className="dropdown-item">
                          Something else here{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item-left">
                    <a className="nav-link active" aria-disabled="true">
                      Mobile App
                    </a>
                  </li>
                </ul>
              </div>

              <form className="d-flex" role="search">
               
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item-right-signin">
                  <button type="submit" className="btn btn-outline-primary">
                    <Link to="/signIn" className="nav-link active">
                      Sign In
                    </Link>
                  </button>
                </li>

                <li className="nav-item-right-cart">
                  <Link to="/cart" className="nav-link active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="bg-picture"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <p className="Order-text">
          Order Your <br /> Favourite Food Here
        </p>
      </div>
    </div>
  );
};

export default Navbar;
