import { createSelector } from "reselect";

export const flightListSelector = (state) => state.flightList;

export const sortedFlightsArrivals = createSelector(
  [flightListSelector],
  (flightList) => flightList.filter((flight) => flight.status === true)
);

export const sortedFlightsDepartures = createSelector(
  [flightListSelector],
  (flightList) => flightList.filter((flight) => flight.status === false)
);
