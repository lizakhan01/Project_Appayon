import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './SearchBar.css';

const SearchBar = () => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation(); // To listen to route changes

  // Handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter food list based on search term
    if (value) {
      const results = food_list.filter(food =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
      setIsDropdownVisible(true); // Show dropdown when results exist
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false); // Hide dropdown when input is empty
    }
  };

  // Clear search term when navigating to home page
  useEffect(() => {
    if (location.pathname === '/') {
      setSearchTerm('');
      setIsDropdownVisible(false);
    }
  }, [location]);

  // Handle clicks outside of the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Close dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div className="search-bar" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for your favorite foods..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        onFocus={() => setIsDropdownVisible(true)} // Open dropdown on focus
      />
      {isDropdownVisible && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((food) => (
            <Link key={food._id} to={`/food/${food._id}`} className="search-result-item" onClick={() => setIsDropdownVisible(false)}>
              <img src={food.image} alt={food.name} className="search-result-image" />
              <p>{food.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;