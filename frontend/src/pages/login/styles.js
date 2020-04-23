import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100%;
`;

export const FormHolder = styled.div`
  position: absolute;
  width: 578px;
  height: 467px;
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
  &,&:after {
    background: linear-gradient(
    to bottom,
    rgba(110, 220, 220, 1) 0%,
    rgba(43, 31, 174, 1) 33%,
    rgba(255, 20, 30, 1) 66%
  );
  }
`;

export const FormContent = styled.div`
  position: relative;
  width: 576px;
  height: 465px;
  background: rgba(0, 0, 0, 1);
  #logoPanflix {
    margin-bottom: 40px;
  }
  form {
    width: 100%;
    input {
      width: 260px;
      height: 50px;
      padding: 0 5%;
      background: rgba(255, 20, 30, 0.1);
      border-radius: 5px;
      border-bottom: 1px solid rgba(255, 20, 30, 1);
      margin: 15px 0;
      &::placeholder, & {
        color: rgba(255, 20, 30, 1);
        font-size: 16px;
      }
      &:hover, &:focus {
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
`;
