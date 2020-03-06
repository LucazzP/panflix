import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'D-DIN Condensed';
    src: url('../D-DINCondensed-Bold.woff2') format('woff2'),
        url('../D-DINCondensed-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'D-DIN';
    src: url('../D-DIN-Italic.woff2') format('woff2'),
        url('../D-DIN-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'D-DIN Condensed';
    src: url('../D-DINCondensed.woff2') format('woff2'),
        url('../D-DINCondensed.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'D-DIN';
    src: url('../D-DIN.woff2') format('woff2'),
        url('../D-DIN.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'D-DIN Exp';
    src: url('../D-DINExp-Italic.woff2') format('woff2'),
        url('../D-DINExp-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'D-DIN Exp';
    src: url('../D-DINExp.woff2') format('woff2'),
        url('../D-DINExp.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'D-DIN';
    src: url('../D-DIN-Bold.woff2') format('woff2'),
        url('../D-DIN-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'D-DIN Exp';
    src: url('../D-DINExp-Bold.woff2') format('woff2'),
        url('../D-DINExp-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  html, body, button, input {
    font-family: 'D-DIN', sans-serif;
  }
`;

export default Fonts;