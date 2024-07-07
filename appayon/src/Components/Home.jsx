import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodData from "../foodData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import bgImage from "./bg2.jpg";
import "./Home.css";

const Home = () => {
  const [foodname, setFoodName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (foodname.trim()) {
      const filteredSuggestions = foodData.filter((food) =>
        food.name.toLowerCase().includes(foodname.toLowerCase())
      );
      // Sort suggestions to prioritize items that start with the search query
      const sortedSuggestions = sortSuggestions(filteredSuggestions, foodname.toLowerCase());
      setSuggestions(sortedSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [foodname]);

  const sortSuggestions = (suggestions, query) => {
    const startsWithQuery = [];
    const containsQuery = [];
    
    suggestions.forEach((food) => {
      const lowerCaseName = food.name.toLowerCase();
      if (lowerCaseName.startsWith(query)) {
        startsWithQuery.push(food);
      } else if (lowerCaseName.includes(query)) {
        containsQuery.push(food);
      }
    });
    
    return [...startsWithQuery, ...containsQuery];
  };

  const handleInputChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setFoodName(suggestion.name);
    setSuggestions([]);
    navigate(`/menu/${suggestion.id}`); // Navigate to item detail page
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    navigate(`/menu?search=${encodeURIComponent(foodname)}`); // Navigate to menu with search query
  };

  return (
    <div className="page-body">
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="appayon">
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                <div className="search-container">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={foodname}
                    onChange={handleInputChange}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                  {suggestions.length > 0 && (
                    <div className="suggestions">
                      {suggestions.map((suggestion) => (
                        <div
                          key={suggestion.id}
                          className="suggestion-item"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </form>

              <div className="nav-item-right">
                <li className="nav-item-right-signin">
                  <Link to="/signin" className="nav-link active">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item-right-signup">
                  <Link to="/signup" className="nav-link active">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item-right-cart">
                  <Link to="/cart" className="nav-link active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                    </svg>
                  </Link>
                </li>
              </div>
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



export default Home;
