import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import FlightList from './components/flightList/FlightList';
import Search from './components/search/Search';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="page">
          <Search />
          <FlightList />
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
