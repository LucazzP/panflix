import styled from 'styled-components';

export const MovieInfo = styled.div`
  width: 100%;
  height: 100vh;
  .videoHolder {
    position: relative;
    width: 100%;
    height: 60%;
    z-index: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    iframe,
    .image {
      position: relative;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      background: rgba(0, 0, 0, 1);
    }
    .image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
      }
      h2 {
        color: #fff;
        position: absolute;
        top: 50%;
        font-size: 50px;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
        margin: 0;
        text-align: center;
      }
    }
  }
  .Info {
    h1 {
      color: #fff;
      margin: 50px 0 0 10px;
      font-weight: 700;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      margin: 5px 0 0 10px;
    }
    p {
      color: #fff;
      width: 50%;
      text-align: justify;
      margin: 30px 0 0 10px;
    }
  }
`;
