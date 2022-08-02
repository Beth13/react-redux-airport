import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import flightReducer from "./components/flightList/flightList.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  flightReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
