import React from "react";

import "../../flightTable.scss";

const NoFlightTable = () => {
  return (
    <div className="flight">
      <div className="flight__no-flight">
        If you have already clicked the{" "}
        <span className="flight__no-flight__span">SEARCH</span> button, there
        are NO FLIGHTS...
      </div>
    </div>
  );
};

export default NoFlightTable;
