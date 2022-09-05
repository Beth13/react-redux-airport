import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './search.scss';
const qs = require('qs');

const Search = () => {
  const { search } = useLocation();
  const { date } = qs.parse(search.replace('?', ''));

  const [flightValue, setFlightValue] = useState('');

  const params = qs.stringify(flightValue ? { date, value: flightValue } : { date });
  const url = `/departures?${params}`;

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
        <Link className="search__area-btn" to={url}>
          Search
        </Link>
      </div>
    </div>
  );
};

export default Search;
