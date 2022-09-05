import { FLIGHT_LIST_RECEIVED } from './flightList.actions';

const initialState = {
  arrivals: [],
  departures: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECEIVED: {
      const { arrival, departure } = action.payload.flights.body;
      return {
        ...state,
        arrivals: arrival,
        departures: departure,
      };
    }

    default:
      return state;
  }
};

export default flightReducer;
