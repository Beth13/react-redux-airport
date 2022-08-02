import { fetchFlights } from "../../gateway/flights.gateway";

export const FLIGHT_ARIVALS = "FLIGHT_ARIVALS";
export const FLIGHT_DEPARTUNES = "FLIGHT_DEPARTUNES";
export const FLIGHT_LIST_RECEIVED = "FLIGHT_LIST_RECEIVED";

export const flightListRecieved = (flightList) => {
  const action = {
    type: FLIGHT_LIST_RECEIVED,
    payload: {
      flightList,
    },
  };

  return action;
};

export const getFlightList = () => {
  const thunkAction = function (dispatch) {
    fetchFlights().then((flightsList) =>
      dispatch(flightListRecieved(flightsList))
    );
  };

  return thunkAction;
};
