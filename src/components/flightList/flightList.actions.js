export const FLIGHT_ARIVALS = "FLIGHT_ARIVALS";
export const FLIGHT_DEPARTUNES = "FLIGHT_DEPARTUNES";

export const filterToArivals = (flilghtData) => {
  return {
    type: FLIGHT_ARIVALS,
    paylpad: { flilghtData },
  };
};

export const filterToDepartunes = (flilghtData) => {
  return {
    type: FLIGHT_DEPARTUNES,
    paylpad: { flilghtData },
  };
};
