import React, { useEffect, useState } from "react";
import moment from "moment";

import FlightHeader from "../flightList/flightHeader/FlightHeader";
import FlightTableArrivals from "./flightTable/flightTableArrivals/FlightTableArrivals";
import FlightTableDep from "./flightTable/flightTableDep/FlightTableDep";

import "./flightList.scss";
import { useLocation } from "react-router-dom";
import { fetchFlights } from "../../gateway/flights.gateway";

const FlightList = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [flightsArrival, setFlightsArrival] = useState([]);
  const [flightsDepartures, setFlightsDepartures] = useState([]);

  const { search } = useLocation();
  const valuesofSearch = search.split("=");

  const changeList = (headerName) => {
    if (headerName === "arrivals") {
      setIsClicked(false);
    }
    if (headerName === "departures") {
      setIsClicked(true);
    }
  };

  useEffect(() => {
    fetchFlights()
      .then((flights) =>
        flights.map(
          (flight) =>
            (flight = { ...flight, time: moment(new Date()).format("HH:MM") })
        )
      )
      .then((flights) => {
        const filterFlightsArr = flights.filter(
          (flight) => flight.status === true
        );
        setFlightsArrival(filterFlightsArr);

        const filterFlightsDep = flights.filter(
          (flight) => flight.status === false
        );
        setFlightsDepartures(filterFlightsDep);
      });
  }, []);

  const onSearchArrival = (flightValue) => {
    const findedArrival = flightsArrival.filter((flight) =>
      flight.flightId.toLowerCase().includes(flightValue.toLowerCase())
    );

    return findedArrival;
  };

  const onSearchDep = (flightValue) => {
    const findedDep = flightsDepartures.filter((flight) =>
      flight.flightId.toLowerCase().includes(flightValue.toLowerCase())
    );

    return findedDep;
  };

  return (
    <div className="flight-list">
      <div className="flight-list__header">
        <FlightHeader headerName={"departures"} changeList={changeList} />
        <FlightHeader headerName={"arrivals"} changeList={changeList} />
      </div>
      {isClicked ? (
        <FlightTableDep
          onSearchDep={onSearchDep}
          valuesofSearch={valuesofSearch}
        />
      ) : (
        <FlightTableArrivals
          onSearchArrival={onSearchArrival}
          valuesofSearch={valuesofSearch}
        />
      )}
    </div>
  );
};

export default FlightList;
