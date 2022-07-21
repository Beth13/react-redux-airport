import React from "react";

import "./search.scss";

const Search = () => {
  return (
    <div className="search__page">
      <h1 className="search__title">Search flight</h1>
      <div className="search__area">
        <span className="search__area-loop">
          <i className="fas fa-eye"></i>
        </span>
        <input
          className="search__area-input"
          placeholder="Airline, destination or flight #"
        />
        <button className="search__area-btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
