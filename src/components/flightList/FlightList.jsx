import React, { Component, useState } from "react";
import { connect } from "react-redux";
import * as flightActions from "../flightList/flightList.actions";

import FlightHeader from "../flightList/flightHeader/FlightHeader";
import FlightTableArrivals from "./flightTable/flightTableArrivals/FlightTableArrivals";

import "./flightList.scss";
import FlightTableDep from "./flightTable/flightTableDep/FlightTableDep";

class FlightList extends Component {
  render() {
    const {
      isArrival,
      isDep,
      flightValue,
      handleClickArr,
      handleClickDep,
      onSearchDep,
      onSearchArrival,
    } = this.props;

    return (
      <div className="flight-list">
        <FlightHeader
          isArrival={isArrival}
          isDep={isDep}
          handleClickArr={handleClickArr}
          handleClickDep={handleClickDep}
        />
        {isDep && (
          <FlightTableDep onSearchDep={onSearchDep} flightValue={flightValue} />
        )}
        {isArrival && (
          <FlightTableArrivals
            flightValue={flightValue}
            onSearchArrival={onSearchArrival}
          />
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isArrival: state.isArrival,
    isDep: state.isDep,
    // filteredArrivals: state.filteredArrivals,
    // filteredDepartures: state.filteredDepartures,
  };
};

const mapDispatch = {
  handleClickArr: flightActions.changeToArivals,
  handleClickDep: flightActions.changeToDepartunes,
  // searchArrivals: flightActions.searchArrivals,
  // searchDepartunes: flightActions.searchDepartunes,
};

const connector = connect(mapState, mapDispatch);
const connectorFlightsList = connector(FlightList);

export default connectorFlightsList;
