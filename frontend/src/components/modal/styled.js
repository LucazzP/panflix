import styled, { createGlobalStyle } from 'styled-components';

export const ModalFormCSS = createGlobalStyle`
  .modalForm {
    .ant-modal-content {
      background: #fff;
      border-radius: 15px;
      height: 70%;
      padding: 5% 5% 0;
      .ant-modal-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
          background-color: red;
          color: #fff;
          box-shadow: 0 0 4px 4px rgba(0,0,0,0.05);
          border-radius: 30px;
          cursor: pointer;
          padding: 12px 40px;
          font-size: 15px;
          margin-top: 10px;
          box-shadow: 0 0 8px rgba(255, 42, 48, 0.2);
          transition: 0.3s all;
          cursor: pointer;
        }
        a:hover {
          box-shadow: 0 0 10px rgba(255, 42, 48, 0.3);
          padding: 12px 50px;
        }
        p {
          text-align: center;
          &.title {
            font-size: 22px;
            color: rgba(255, 42, 48, 1);
            text-transform: capitalize;
          }
          &.subtitle {
            font-size: 20px;
            margin-bottom: 5%;
          }
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          width: 100%;
          @media (max-width: 540px) {
            input {
              width: 100% !important;
            }
            textarea {
              width: 100% !important;
            }
            .select {
              width: 100% !important;
            }
          }
          input {
            margin: 0 0 5% 0;
            border: 0;
            border-bottom: 1px solid #ccc;
            border-radius: 10px;
            width: 80%;
            padding: 5% 5%;
            color: #777;
            font-size: 16px;
            transition: 0.3s all;
            &:hover,
            &:active,
            &:focus {
              outline: none;
              border-bottom: 1px solid #777;
            }
          }
          button {
            background: red;
            color: #fff;
            box-shadow: 0 0 4px 4px rgba(0,0,0,0.05);
            border-radius: 30px;
            cursor: pointer;
            padding: 12px 40px;
            font-size: 15px;
            margin-top: 10px;
            box-shadow: 0 0 8px rgba(255, 42, 48, 0.2);
            transition: 0.3s all;
            cursor: pointer;
          }
          button:hover {
            box-shadow: 0 0 10px rgba(255, 42, 48, 0.3);
            padding: 12px 50px;
          }
          .select {
            margin: 0 0 5% 0;
            border: 0;
            border-bottom: 1px solid #ccc;
            border-radius: 10px;
            width: 80%;
            padding: 5% 5%;
            color: #777;
            font-size: 16px;
            transition: 0.3s all;
            &:hover,
            &:active,
            &:focus {
              outline: none;
              border-bottom: 1px solid #777;
            }
            .ant-select-selector {
              border: 0px;
              &:hover,
              &:active,
              &:focus {
                outline: none;
                border: 0;
              }
            }
          }
          .termos {
            margin-top: 20px;
            text-align: center;
          }
        }
      }
    }
  }
`;

export const ModalRoot = styled.div`
  width: 100%;
  height: 100%;
`;
