import styled from 'styled-components';

export const FormColumn = styled.div`
  width: 200px;
  margin: 0 20px;
  height: 500px;
  &:first-of-type {
    width: 40%;
  }
  @media (max-width: 768px) {
    & {
      width: 100% !important;
      padding: 20px 10px 20px 10px;
    }
  }
  .upload {
    height: 200px;
    width: 200px;
    border: 0;
    background: rgba(255, 20, 30, 1) !important;
    border-radius: 30px;
    box-shadow: 0 0 4px 0 rgba(255, 20, 30, 0.5);
    color: transparent;
    cursor: pointer;
    @media (max-width: 768px) {
      &:first-of-type {
        margin-bottom: 15px;
      }
    }
    &::-webkit-file-upload-button {
      visibility: hidden;
    }
    &::before {
      content: '- Upload -';
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      font-weight: 700;
      font-size: 18px;
      width: 100%;
      height: 100%;
    }
    &:hover {
      box-shadow: 0 0 8px 0 rgba(255, 20, 30, 1);
    }
    &:active {
      outline: 0;
      background: rgba(255, 20, 30, 1);
    }
    &:active::before {
      background: rgba(190, 20, 30, 1);
    }
    &:in-range {
      content: '';
      background: url('background: rgba(190, 20, 30, 1);');
    }
  }
`;

export const FormHolder = styled.div`
  width: 100%;
  padding-left: 10px;
  form {
    height: 100%;
    width: 100%;
    .columnsContainer {
      @media (max-width: 768px) {
        & {
          flex-direction: column;
          align-items: center;
        }
      }
    }
    label {
      color: #fff;
      font-size: 20px;
      margin: 0 0 15px;
    }
    input.text {
      width: 100%;
      background: none;
      border-bottom: 2px solid rgba(255, 20, 30, 1);
      padding: 8px 10px;
      color: #ccc;
      &::placeholder {
        color: #ccc;
      }
    }
    textarea {
      width: 100%;
      height: 100px;
      background: none;
      border-bottom: 2px solid rgba(255, 20, 30, 1);
      padding: 8px 10px;
      margin: 15px 0 0;
      resize: none;
      color: #ccc;
      &::placeholder {
        color: #ccc;
      }
    }
    button {
      margin: 50px 0 0 0;
      background: rgba(255, 20, 30, 1);
      color: #fff;
      padding: 10px 40px;
      border-radius: 30px;
      box-shadow: 0 0 4px 0 rgba(255, 20, 30, 0.5);
      font-size: 16px;
      &:hover {
        padding: 10px 80px;
        box-shadow: 0 0 8px 0 rgba(255, 20, 30, 1);
      }
    }
  }
`;
