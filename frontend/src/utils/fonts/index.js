import { createGlobalStyle } from 'styled-components';

import 'typeface-montserrat';

const Fonts = createGlobalStyle`
  
  html, body, button, input, *, ::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default Fonts;