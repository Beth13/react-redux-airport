import React from 'react';

const Day = ({ currentDay, date, chosenDateHandler, chosenDay }) => {
  return (
    <div
      onClick={() => chosenDateHandler(date)}
      className={
        currentDay === date.format('DD-MM-YYYY')
          ? 'active-day calendar__days-btn'
          : 'calendar__days-btn'
      }
    >
      <div className="calendar__days-btn_item">
        <span>{chosenDay}</span>
        <span className="calendar__days-btn_item-date">{date.format('DD-MM-YYYY')}</span>
      </div>
    </div>
  );
};

export default Day;
