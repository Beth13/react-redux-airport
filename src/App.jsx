import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Flights from './features/flights/Flights';
import Search from './features/search/Search';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="page">
          <Search />
          <Flights />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
