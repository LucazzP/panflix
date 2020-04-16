import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'normalize.css';
import 'typeface-montserrat';
import 'antd/dist/antd.css';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
};

export default App;
