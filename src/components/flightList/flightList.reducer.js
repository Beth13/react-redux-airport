import { ARIVALS_SELECTED, DEPARTUNES_SELECTED } from "./flightList.actions";

const initialState = {
  isArrival: true,
  isDep: false,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARIVALS_SELECTED:
      return {
        isArrival: true,
        isDep: false,
      };
    case DEPARTUNES_SELECTED:
      return {
        isArrival: false,
        isDep: true,
      };

    default:
      return state;
  }
};

export default flightReducer;
