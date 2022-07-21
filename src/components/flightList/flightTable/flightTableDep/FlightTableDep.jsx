import React from "react";
import moment from "moment";
import { departures } from "../../../../utils/departures";

import "../../flightTable.scss";

const FlightTableDep = () => {
  return (
    <div className="flight">
      <h2 className="flight__today-day">{`Today is ${moment(new Date()).format(
        "MMMM Do YYYY"
      )}`}</h2>
      <ul className="flight-list">
        {departures.map((flight) => (
          <li className="flight-list__item" key={flight.flightId}>
            <span className="flight-list__item_span">{flight.terminal}</span>
            <span className="flight-list__item_span">{flight.time}</span>
            <span className="flight-list__item_span">{flight.destination}</span>
            <span className="flight-list__item_span">{flight.status}</span>
            <span className="flight-list__item_span">{flight.flightId}</span>
            <span className="flight-list__item_span">{flight.company}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightTableDep;
