import { createGlobalStyle } from 'styled-components';

const DefaultStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    border: 0;
    margin: 0px;
  }
  button {
    border: 0;
    font-family: inherit;
    background: 0;
    cursor: pointer;
  }
`;

export default DefaultStyle;