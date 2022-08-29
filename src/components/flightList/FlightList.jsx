import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Route, Routes, useLocation } from 'react-router-dom';
import { sortedFlightsArrivals, sortedFlightsDepartures } from './flightList.selector';

import Calendar from './calendar/Calendar';
import FlightHeader from '../flightList/flightHeader/FlightHeader';
import FlightTable from './flightTable/flightTable';
import * as flightActions from '../flightList/flightList.actions';

import './flightList.scss';

const qs = require('qs');

const FlightList = ({ getFlightList, arrivals, departures }) => {
  const { search } = useLocation();

  const { date } = qs.parse(search.replace('?', ''));

  const valuesofSearch = search.split('=');

  useEffect(() => getFlightList(date || moment(new Date()).format('DD-MM-YYYY')), []);

  const onSearchFlight = (flightValue, flights) => {
    if (flightValue != null) {
      const findedFlight = flights.filter(flight => flight.flightId.includes(flightValue));

      return findedFlight;
    } else return flights;
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
            <FlightTable
              arrivals={arrivals}
              departures={departures}
              onSearchFlight={onSearchFlight}
              valuesofSearch={valuesofSearch}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

const mapState = state => {
  return {
    arrivals: sortedFlightsArrivals(state),
    departures: sortedFlightsDepartures(state),
  };
};

const mapDispatch = {
  getFlightList: flightActions.getFlightList,
};

export default connect(mapState, mapDispatch)(FlightList);
