import { createStore } from "redux";
import flightReducer from "./components/flightList/flightList.reducer";

const store = createStore(
  flightReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
