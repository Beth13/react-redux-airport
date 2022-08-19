import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { sortedFlightsArrivals, sortedFlightsDepartures } from './flightList.selector';

import Calendar from './calendar/Calendar';
import FlightHeader from '../flightList/flightHeader/FlightHeader';
import FlightTableArrivals from './flightTable/flightTableArrivals/FlightTableArrivals';
import FlightTableDep from './flightTable/flightTableDep/FlightTableDep';
import * as flightActions from '../flightList/flightList.actions';

import './flightList.scss';

const qs = require('qs');

const FlightList = ({ getFlightList, arrivals, departures }) => {
  const [isClicked, setIsClicked] = useState(null);
  const { search } = useLocation();

  const { date } = qs.parse(search.replace('?', ''));

  const valuesofSearch = search.split('=');

  useEffect(() => getFlightList(date || moment(new Date()).format('DD-MM-YYYY')), []);

  const changeList = headerName => {
    if (headerName === 'arrivals') {
      setIsClicked(true);
    }
    if (headerName === 'departures') {
      setIsClicked(false);
    }
  };

  const onSearchArrival = flightValue => {
    if (flightValue != null) {
      const findedArrival = arrivals.filter(flight => flight.flightId.includes(flightValue));
      return findedArrival;
    }

    return arrivals;
  };

  const onSearchDep = flightValue => {
    if (flightValue != null) {
      const findedDep = departures.filter(flight => flight.flightId.includes(flightValue));

      return findedDep;
    } else return departures;
  };

  return (
    <div className="flight-list">
      <div className="flight-list__header">
        <FlightHeader headerName={'departures'} changeList={changeList} />
        <FlightHeader headerName={'arrivals'} changeList={changeList} />
      </div>
      <Calendar getFlightList={getFlightList} />
      {isClicked ? (
        <FlightTableArrivals
          onSearchArrival={onSearchArrival}
          valuesofSearch={valuesofSearch}
          arrivals={arrivals}
        />
      ) : (
        <FlightTableDep
          onSearchDep={onSearchDep}
          valuesofSearch={valuesofSearch}
          departures={departures}
        />
      )}
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
