import React from 'react';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Day from './Day';

import './calendar.scss';

const qs = require('qs');

const Calendar = ({ getFlightList }) => {
  const { search } = useLocation();
  const { value } = qs.parse(search.replace('?', ''));

  const [currentDay, setCurrentDay] = useState();

  const navigate = useNavigate();

  const chosenDateHandler = date => {
    const formatedDate = moment(date).format('DD-MM-YYYY');
    setCurrentDay(formatedDate);

    const params = qs.stringify({ date: formatedDate, value });

    navigate(`/departures?${params}`);

    getFlightList(formatedDate);
  };

  return (
    <div className="calendar">
      <div className="calendar__picker">
        <input
          className="calendar__picker-input"
          type="date"
          onInput={event => chosenDateHandler(event.target.value)}
        />
      </div>
      <div className="calendar__days">
        <Day
          currentDay={currentDay}
          date={moment(new Date()).subtract(1, 'd')}
          chosenDateHandler={chosenDateHandler}
          chosenDay={'yesterday'}
        />
        <Day
          currentDay={currentDay}
          date={moment(new Date())}
          chosenDateHandler={chosenDateHandler}
          chosenDay={'today'}
        />
        <Day
          currentDay={currentDay}
          date={moment(new Date()).add(1, 'd')}
          chosenDateHandler={chosenDateHandler}
          chosenDay={'tomorrow'}
        />
      </div>
    </div>
  );
};

export default Calendar;
