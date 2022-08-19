import { createSelector } from 'reselect';

export const flightArrivalsSelector = state => state.arrivals;
export const flightDeparturesSelector = state => state.departures;

export const sortedFlightsArrivals = createSelector([flightArrivalsSelector], flightList =>
  flightList.map(flight => ({
    id: flight.ID,
    terminal: flight.term,
    time: flight.actual,
    destination: flight['airportFromID.city_en'],
    status: flight.status,
    company: flight['carrierID.code'],
    flightId: flight.codeShareData[0].codeShare,
  })),
);

export const sortedFlightsDepartures = createSelector([flightDeparturesSelector], flightList =>
  flightList.map(flight => ({
    id: flight.ID,
    terminal: flight.term,
    time: flight.actual,
    destination: flight['airportToID.city_en'],
    status: flight.status,
    company: flight['carrierID.code'],
    flightId: flight.codeShareData[0].codeShare,
  })),
);
