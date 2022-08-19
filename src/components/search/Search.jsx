import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './search.scss';
const qs = require('qs');

const Search = () => {
  const { search } = useLocation();
  const { value, date } = qs.parse(search.replace('?', ''));

  const [flightValue, setFlightValue] = useState(value || '');

  const params = qs.stringify(flightValue ? { date, value: flightValue } : { date });
  const url = `/departures?${params}`;
  const navigate = useNavigate();

  const handleChange = event => {
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
        <button className="search__area-btn" onClick={() => navigate(url)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
