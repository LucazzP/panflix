import styled, { createGlobalStyle } from 'styled-components';

export const ModalCSS = createGlobalStyle`
  .modalRegistro {
    .ant-modal-content {
      background: #fafafa;
      border-radius: 15px;
      height: 70vh;
      padding: 10% 5%;
      .ant-modal-body {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 20, 30, 1);
          &.info {
            color: #111;
            text-align: center;
          }
        }
        form {
          width: 100%;
          height: 100%;
          input {
            margin: 0 0 5% 0;
            background: #eee;
            border-bottom: 2px solid rgba(255, 20, 30, 1);
            border-radius: 10px;
            width: 80%;
            padding: 5% 10%;
            color: #111;
            font-size: 16px;
          }
          span {
            margin: -2% 0 3%;
            color: rgba(255, 20, 30, 1);
          }
          button {
            background: rgba(255, 20, 30, 1);
            border-radius: 30px;
            color: #fafafa;
            font-size: 16px;
            padding: 3% 10%;
            margin-top: 5%;
            &:hover {
              padding: 3% 12%;
              box-shadow: 0 0 10px rgba(255, 20, 30, 0.5);
            }
          }
        }
      }
    }
  }
`;

export const Registro = styled.div`
  width: 100%;
  height: 100%;
`;

export const AfterRegistro = styled.div`
  width: 100%;
  height: 100%;
  &.none {
    display: none;
  }
`;
