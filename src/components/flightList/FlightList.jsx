import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import FlightHeader from "../flightList/flightHeader/FlightHeader";
import FlightTableArrivals from "./flightTable/flightTableArrivals/FlightTableArrivals";
import FlightTableDep from "./flightTable/flightTableDep/FlightTableDep";
import * as flightActions from "../flightList/flightList.actions";

import "./flightList.scss";
import { useLocation } from "react-router-dom";
import {
  sortedFlightsArrivals,
  sortedFlightsDepartures,
} from "./flightList.selector";

const FlightList = ({ getFlightList, arrivals, departures }) => {
  const [isClicked, setIsClicked] = useState(null);
  const { search } = useLocation();
  const valuesofSearch = search.split("=");

  useEffect(
    () => getFlightList(moment(new Date(2022, 10, 1)).format("MM-DD-YYYY")),
    []
  );

  const changeList = (headerName) => {
    if (headerName === "arrivals") {
      setIsClicked(true);
    }
    if (headerName === "departures") {
      setIsClicked(false);
    }
  };

  const onSearchArrival = (flightValue) => {
    const findedArrival = arrivals.filter((flight) =>
      flight.flightId.includes(flightValue)
    );

    return findedArrival;
  };

  const onSearchDep = (flightValue) => {
    const findedDep = departures.filter((flight) =>
      flight.flightId.includes(flightValue)
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
        <FlightTableArrivals
          onSearchArrival={onSearchArrival}
          valuesofSearch={valuesofSearch}
          arrivals={arrivals}
        />
      ) : (
        <FlightTableDep
          onSearchDep={onSearchDep}
          valuesofSearch={valuesofSearch}
          departures={departures}
        />
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    arrivals: sortedFlightsArrivals(state),
    departures: sortedFlightsDepartures(state),
  };
};

const mapDispatch = {
  getFlightList: flightActions.getFlightList,
};

export default connect(mapState, mapDispatch)(FlightList);
