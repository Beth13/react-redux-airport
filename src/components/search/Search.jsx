import React from "react";

import "./search.scss";

const Search = ({ onSearchArrival, setFlightValue, flightValue }) => {
  const handleChange = (event) => {
    setFlightValue(event.target.value);
  };

  return (
    <div className="search__page">
      <h1 className="search__title">Search flight</h1>
      <div className="search__area">
        <span className="search__area-loop">
          <i className="fas fa-eye"></i>
        </span>
        <input
          onChange={handleChange}
          value={flightValue}
          className="search__area-input"
          placeholder="Airline, destination or flight #"
        />
        <button
          className="search__area-btn"
          onClick={() => onSearchArrival(flightValue)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
