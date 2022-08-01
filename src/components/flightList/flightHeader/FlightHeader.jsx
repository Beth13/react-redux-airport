import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./flightHeader.scss";

const FlightHeader = ({ headerName, changeList }) => {
  const { search } = useLocation();
  const parameter = search;

  return (
    <div className="flight-navigation">
      <NavLink
        onClick={() => {
          changeList(headerName);
        }}
        className={({ isActive }) =>
          isActive ? `active flight-navigation__btn` : "flight-navigation__btn"
        }
        to={`/${headerName}${parameter}`}
      >
        {headerName}
      </NavLink>
    </div>
  );
};

export default FlightHeader;
