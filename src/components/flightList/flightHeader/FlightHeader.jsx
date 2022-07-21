import React from "react";

import "./flightHeader.scss";

const FlightHeader = ({
  handleClickArr,
  handleClickDep,
  isClickedDep,
  isClickedArr,
}) => {
  return (
    <div className="flight-navigation">
      <button
        className={
          isClickedDep
            ? "active flight-navigation__btn"
            : "flight-navigation__btn"
        }
        onClick={handleClickDep}
      >
        departures
      </button>
      <button
        className={
          isClickedArr
            ? "active flight-navigation__btn"
            : "flight-navigation__btn"
        }
        onClick={handleClickArr}
      >
        arivals
      </button>
    </div>
  );
};

export default FlightHeader;
