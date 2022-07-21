import React from "react";
import FlightList from "./components/flightList/FlightList";
import Search from "./components/search/Search";

const App = () => {
  return (
    <div className="page">
      <Search />
      <FlightList />
    </div>
  );
};

export default App;
