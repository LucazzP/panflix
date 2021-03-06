import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100%;
`;

export const FormHolder = styled.div`
  position: absolute;
  width: 50%;
  height: 70%;
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    filter: blur(50px);
  }
  &,
  &:after {
    background: linear-gradient(
      to bottom,
      rgba(110, 220, 220, 1) 0%,
      rgba(43, 31, 174, 1) 33%,
      rgba(255, 20, 30, 1) 66%
    );
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 550px;
  }
`;

export const FormContent = styled.div`
  position: relative;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: rgba(0, 0, 0, 1);
  #logoPanflix {
    margin-bottom: 40px;
  }
  form {
    width: 100%;
    input {
      width: 60%;
      height: 50px;
      padding: 0 5%;
      background: rgba(255, 20, 30, 0.1);
      border-radius: 5px;
      border-bottom: 1px solid rgba(255, 20, 30, 1);
      margin: 15px 0;
      &::placeholder,
      & {
        color: rgba(255, 20, 30, 1);
        font-size: 16px;
      }
      &:hover,
      &:focus {
        box-shadow: 0 0 5px rgba(255, 20, 30, 1);
      }
    }
    button {
      width: 260px;
      height: 50px;
      padding: 0 5%;
      background: rgba(255, 20, 30, 1);
      border-radius: 5px;
      margin: 15px 0;
      color: #fff;
      font-size: 16px;
      box-shadow: 0 0 5px rgba(255, 20, 30, 1);
      &:hover {
        width: 40%;
      }
    }
  }
  span {
    color: #fafafa;
    text-align: center;
  }
  a {
    color: rgba(255, 20, 30, 1);
    &:hover {
      text-shadow: 0 0 5px rgba(255, 20, 30, 1);
    }
  }
  .afterForm {
    height: 100%;
    padding: 20% 5%;
    h1,
    h2 {
      color: #fff;
      text-align: center;
    }
    h1 {
      font-weight: 600;
      font-size: 100px;
    }
    h2 {
      font-weight: 300;
      line-height: 1.4;
      font-size: 18px;
      margin: 0 20%;
    }
    button {
      font-weight: 600;
      font-size: 18px;
      margin-top: 50px;
      color: #fff;
      background: rgba(255, 20, 30, 1);
      padding: 10px 30px;
      border-radius: 30px;
      &:hover {
        padding: 10px 60px;
      }
    }
  }
`;
