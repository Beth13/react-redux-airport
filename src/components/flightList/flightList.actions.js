import { fetchFlights } from "../../gateway/flights.gateway";

export const FLIGHT_LIST_RECEIVED = "FLIGHT_LIST_RECEIVED";

export const flightListRecieved = (body) => {
  const action = {
    type: FLIGHT_LIST_RECEIVED,
    payload: {
      body,
    },
  };

  return action;
};

export const getFlightList = (date) => {
  const thunkAction = function (dispatch) {
    fetchFlights(date).then((body) => dispatch(flightListRecieved(body)));
  };

  return thunkAction;
};
