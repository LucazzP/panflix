import styled, { createGlobalStyle } from 'styled-components';

export const ModalRegistroCSS = createGlobalStyle`
  .modalRegistro {
    .ant-modal-content {
      background: #111;
      border-radius: 15px;
      height: 70vh;
      padding: 10% 5%;
      .ant-modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          margin: 0 0 5% 0;
          background: #222;
          border-bottom: 1px solid rgba(255, 20, 30, 1);
          border-radius: 10px;
          width: 80%;
          height: 5rem;
          padding: 5% 10%;
          color: #fff;
          font-size: 20px;
        }
      }
    }
  }
`
