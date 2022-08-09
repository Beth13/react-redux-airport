import React from "react";
import moment from "moment";
import NoFlightTable from "../noFlightTable/NoFlightTable";

import "../../flightTable.scss";

const FlightTableArrivals = ({ onSearchArrival, valuesofSearch }) => {
  return (
    <div className="flight">
      <h2 className="flight__today-day">{`Today is ${moment(
        new Date(2022, 10, 1)
      ).format("MMMM Do YYYY")}`}</h2>
      {onSearchArrival(valuesofSearch[1]).length !== 0 ? (
        <ul className="flight-list">
          {onSearchArrival(valuesofSearch[1]).map((flight) => (
            <li className="flight-list__item" key={flight.id}>
              <span className="flight-list__item_span">{flight.terminal}</span>
              <span className="flight-list__item_span">
                {moment(flight.time).format("hh:mm")}
              </span>
              <span className="flight-list__item_span">
                {flight.destination}
              </span>
              <span className="flight-list__item_span">{"Landed"}</span>
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

export default FlightTableArrivals;
