import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'normalize.css';

import 'antd/dist/antd.css';

// Default CSS
import DefaultStyle from './utils/default_style';
// Fonts
import Fonts from './utils/fonts';

ReactDOM.render(
  <>
    <Fonts />
    <DefaultStyle />
    <App />
  </>, 
  document.getElementById('root')
);
