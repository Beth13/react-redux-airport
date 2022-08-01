import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import FlightList from "./components/flightList/FlightList";
import Search from "./components/search/Search";
import { fetchFlights } from "./utils/flights.gateway";

import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="page">
          <Search />
          <FlightList />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
