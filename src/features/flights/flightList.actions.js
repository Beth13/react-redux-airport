import { fetchFlights } from '../../gateway/flights.gateway';

export const FLIGHT_LIST_RECEIVED = 'FLIGHT_LIST_RECEIVED';

export const flightListRecieved = flights => {
  const action = {
    type: FLIGHT_LIST_RECEIVED,
    payload: {
      flights,
    },
  };

  return action;
};

export const getFlightList = date => {
  const thunkAction = function (dispatch) {
    fetchFlights(date).then(flights => dispatch(flightListRecieved(flights)));
  };

  return thunkAction;
};
