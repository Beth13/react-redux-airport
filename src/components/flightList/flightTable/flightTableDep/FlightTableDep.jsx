import React from "react";
import moment from "moment";

import "../../flightTable.scss";
import NoFlightTable from "../noFlightTable/NoFlightTable";

const FlightTableDep = ({ onSearchDep, flightValue }) => {
  return (
    <div className="flight">
      <h2 className="flight__today-day">{`Today is ${moment(new Date()).format(
        "MMMM Do YYYY"
      )}`}</h2>
      {onSearchDep(flightValue).length !== 0 ? (
        <ul className="flight-list">
          {onSearchDep(flightValue).map((flight) => (
            <li className="flight-list__item" key={flight.flightId}>
              <span className="flight-list__item_span">{flight.terminal}</span>
              <span className="flight-list__item_span">{flight.time}</span>
              <span className="flight-list__item_span">
                {flight.destination}
              </span>
              <span className="flight-list__item_span">{"Do not landed"}</span>
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

export default FlightTableDep;
