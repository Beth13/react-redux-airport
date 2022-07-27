import React, { Component } from "react";

import "./flightHeader.scss";

class FlightHeader extends Component {
  render() {
    const { isArrival, isDep, handleClickArr, handleClickDep } = this.props;

    return (
      <div className="flight-navigation">
        <button
          className={
            isDep ? "active flight-navigation__btn" : "flight-navigation__btn"
          }
          onClick={handleClickDep}
        >
          departures
        </button>
        <button
          className={
            isArrival
              ? "active flight-navigation__btn"
              : "flight-navigation__btn"
          }
          onClick={handleClickArr}
        >
          arivals
        </button>
      </div>
    );
  }
}

export default FlightHeader;
