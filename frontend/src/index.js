import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/landing';

import 'normalize.css';

// Default CSS
import DefaultStyle from './utils/default_style';
// Fonts
import Fonts from './utils/fonts';

ReactDOM.render(
  <>
    <Fonts />
    <DefaultStyle />
    <Landing />
  </>, 
  document.getElementById('root')
);
