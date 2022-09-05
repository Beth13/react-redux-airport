import React from 'react';
import moment from 'moment';

import NoFlightList from './noFlightList/NoFlightList';

import '../../styles/flights.scss';

const flightList = ({ currentFlight }) => {
  return (
    <div className="flight">
      {currentFlight.length !== 0 ? (
        <ul className="flight-list">
          {currentFlight.map(flight => (
            <li className="flight-list__item" key={flight.id}>
              <span className="flight-list__item_span">{flight.terminal}</span>
              <span className="flight-list__item_span">{moment(flight.time).format('hh:mm')}</span>
              <span className="flight-list__item_span">{flight.destination}</span>
              <span className="flight-list__item_span">{flight.flightId}</span>
              <span className="flight-list__item_span">{flight.company}</span>
            </li>
          ))}
        </ul>
      ) : (
        <NoFlightList />
      )}
    </div>
  );
};

export default flightList;
