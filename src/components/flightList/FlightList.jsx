import React, { useState } from "react";
import FlightHeader from "../flightList/flightHeader/FlightHeader";
import FlightTableArrivals from "./flightTable/flightTableArrivals/FlightTableArrivals";

import "./flightList.scss";
import FlightTableDep from "./flightTable/flightTableDep/FlightTableDep";

const FlightList = () => {
  const [isClickedDep, setIsClickedDep] = useState(false);
  const [isClickedArr, setIsClickedArr] = useState(true);

  const handleClickDep = () => {
    setIsClickedDep(true);
    setIsClickedArr(false);
  };

  const handleClickArr = () => {
    setIsClickedDep(false);
    setIsClickedArr(true);
  };

  return (
    <div className="flight-list">
      <FlightHeader
        isClickedDep={isClickedDep}
        isClickedArr={isClickedArr}
        handleClickDep={handleClickDep}
        handleClickArr={handleClickArr}
      />
      {isClickedDep && <FlightTableDep />}
      {isClickedArr && <FlightTableArrivals />}
    </div>
  );
};

export default FlightList;
