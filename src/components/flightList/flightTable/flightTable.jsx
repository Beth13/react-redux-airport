import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';

import NoFlightTable from './noFlightTable/NoFlightTable';

import '../flightTable.scss';

const FlightTable = ({ arrivals, departures, onSearchFlight, valuesofSearch }) => {
  const params = useParams();

  const flights = params.direction === 'arrivals' ? arrivals : departures;
  const currentFlight = onSearchFlight(valuesofSearch[2], flights);

  return (
    <div className="flight">
      {currentFlight.length !== 0 ? (
        <ul className="flight-list">
          {currentFlight.map(flight => (
            <li className="flight-list__item" key={flight.id}>
              <span className="flight-list__item_span">{flight.terminal}</span>
              <span className="flight-list__item_span">{moment(flight.time).format('hh:mm')}</span>
              <span className="flight-list__item_span">{flight.destination}</span>
              <span className="flight-list__item_span">{flight.status}</span>
              <span className="flight-list__item_span">{flight.flightId}</span>
              <span className="flight-list__item_span">{flight.company}</span>
            </li>
          ))}
        </ul>
      ) : (
        <NoFlightTable />
      )}
    </div>
  );
};

export default FlightTable;
