export const ARIVALS_SELECTED = "ARIVALS_SELECTED";
export const DEPARTUNES_SELECTED = "DEPARTUNES_SELECTED";

export const changeToArivals = () => {
  return {
    type: ARIVALS_SELECTED,
  };
};

export const changeToDepartunes = () => {
  return {
    type: DEPARTUNES_SELECTED,
  };
};
