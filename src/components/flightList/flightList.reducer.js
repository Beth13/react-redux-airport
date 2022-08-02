import { FLIGHT_LIST_RECEIVED } from "./flightList.actions";

const initialState = {
  flightList: [],
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECEIVED: {
      return {
        ...state,
        flightList: action.payload.flightList,
      };
    }

    default:
      return state;
  }
};

export default flightReducer;
