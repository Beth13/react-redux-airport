import React, { useState } from "react";
import { Provider } from "react-redux";
import FlightList from "./components/flightList/FlightList";
import Search from "./components/search/Search";

import store from "./store";
import { arrivals, departures } from "./utils/flights";

const App = () => {
  const [flightValue, setFlightValue] = useState("");

  const onSearchArrival = (flightValue) => {
    const findedArrival = arrivals.filter((flight) =>
      flight.flightId.toLowerCase().includes(flightValue.toLowerCase())
    );

    return findedArrival;
  };

  const onSearchDep = (flightValue) => {
    const findedDep = departures.filter((flight) =>
      flight.flightId.toLowerCase().includes(flightValue.toLowerCase())
    );

    return findedDep;
  };
  return (
    <Provider store={store}>
      <div className="page">
        <Search flightValue={flightValue} setFlightValue={setFlightValue} />
        <FlightList
          flightValue={flightValue}
          onSearchDep={onSearchDep}
          onSearchArrival={onSearchArrival}
        />
      </div>
    </Provider>
  );
};

export default App;
