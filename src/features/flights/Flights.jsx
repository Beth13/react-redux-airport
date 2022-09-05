import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Route, Routes, useLocation } from 'react-router-dom';
import { flightArrivalsSelector, flightDeparturesSelector } from './flightList.selector';

import Calendar from './components/calendar/Calendar';
import FlightHeader from './components/flightHeader/FlightHeader';
import FlightList from './components/flightList/FlightList';
import * as flightActions from './flightList.actions';

import '../flights/styles/flights.scss';

const qs = require('qs');

const Flights = ({ getFlightList, arrivals, departures }) => {
  const { search, pathname } = useLocation();

  const { date } = qs.parse(search.replace('?', ''));

  const valuesofSearch = search.split('=');

  useEffect(() => getFlightList(date || moment(new Date()).format('DD-MM-YYYY')), []);

  const onSearchFlight = (flightValue, flights) => {
    if (flightValue != null) {
      const findedFlight = flights.filter(flight => flight.flightId.includes(flightValue));

      return findedFlight;
    } else return flights;
  };

  const filterFlights = flights => {
    console.log(pathname);
    const filteredFlights = flights.map(flight => ({
      id: flight.ID,
      terminal: flight.term,
      time: flight.actual,
      destination:
        pathname === '/departures'
          ? flight['airportToID.city_en']
          : flight['airportFromID.city_en'],
      company: flight['carrierID.code'],
      flightId: flight.codeShareData[0].codeShare,
    }));

    return filteredFlights;
  };

  return (
    <div className="flight-list">
      <div className="flight-list__header">
        <FlightHeader headerName={'departures'} />
        <FlightHeader headerName={'arrivals'} />
      </div>
      <Calendar getFlightList={getFlightList} />
      <Routes>
        <Route
          path="/:direction"
          element={
            <FlightList
              currentFlight={onSearchFlight(
                valuesofSearch[2],
                pathname === '/departures' ? filterFlights(departures) : filterFlights(arrivals),
              )}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    arrivals: flightArrivalsSelector(state),
    departures: flightDeparturesSelector(state),
  };
};

const mapDispatch = {
  getFlightList: flightActions.getFlightList,
};

export default connect(mapState, mapDispatch)(Flights);
