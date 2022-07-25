import React, { useState } from "react";
import FlightList from "./components/flightList/FlightList";
import Search from "./components/search/Search";
import { arrivals } from "./utils/arrivals";
import { departures } from "./utils/departures";

const App = () => {
  const [flightValue, setFlightValue] = useState("");

  // const [arrivalsFlight, setArrivalsFlight] = useState(arrivals);
  // const [departuresFlight, setDeparturesFlight] = useState(departures);

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
    <div className="page">
      <Search
        onSearchArrival={onSearchArrival}
        flightValue={flightValue}
        setFlightValue={setFlightValue}
      />
      <FlightList
        flightValue={flightValue}
        onSearchDep={onSearchDep}
        onSearchArrival={onSearchArrival}
      />
    </div>
  );
};

export default App;
