import { createGlobalStyle } from 'styled-components';

const DefaultStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: 0;
    border: 0;
    margin: 0px;
    transition: 0.3s all;
  }
  button {
    border: 0;
    font-family: inherit;
    background: 0;
    cursor: pointer;
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
  }
`;

export default DefaultStyle;