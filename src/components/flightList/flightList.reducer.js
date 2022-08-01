import { FLIGHT_ARIVALS, FLIGHT_DEPARTUNES } from "./flightList.actions";

const initialState = {
  flightsArrival: [],
  flightsDepartures: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_ARIVALS:
      return {
        ...state,
        flightsArrival: state.flightsArrival.concat(action.payload.flightData),
      };
    case FLIGHT_DEPARTUNES:
      return {
        ...state,
        flightsDepartures: state.flightsDepartures.concat(
          action.payload.flightData
        ),
      };

    default:
      return state;
  }
};

export default flightReducer;
