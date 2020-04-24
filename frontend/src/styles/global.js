import { createGlobalStyle } from 'styled-components';

import 'normalize.css';
import 'typeface-montserrat';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.min.css';

const CSS = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    border: 0;
    margin: 0;
    padding: 0;
    transition: 0.3s all;
  }

  *:focus {
    outline: 0;
  }

  html, body, button, input, *, ::placeholder {
    font: 14px 'Montserrat', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: 0;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .flex {
    display: flex;
    &.row {
      flex-direction: row;
    }
    &.column {
      flex-direction: column;
    }
    &.alignStart {
      align-items: flex-start;
    }
    &.alignCenter {
      align-items: center;
    }
    &.alignEnd {
      align-items: flex-end;
    }
    &.justifyStart {
      justify-content: flex-start;
    }
    &.justifyCenter {
      justify-content: center;
    }
    &.justifyEnd {
      justify-content: flex-end
    }
    &.justifySpaceBtn {
      justify-content: space-between;
    }
  }
`;

export default CSS;
