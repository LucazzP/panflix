import styled from 'styled-components';

export const Modal = styled.div``;

export const MovieContainer = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    padding-left: 10px;
  }
`;

export const Movies = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  text-align: center;
`;

export const Movie = styled.li`
  width: 200px;
  height: 350px;
  margin: 0 10px;
  &:hover {
    .image {
      img {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
      }
    }
  }
  .image {
    position: relative;
    min-width: 200px;
    height: 83.3%;
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
      filter: blur(5px);
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
    img {
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      cursor: pointer;
    }
  }
  .title {
    height: 16.7%;
    h3 {
      margin-top: 10px;
      font-weight: 300;
      color: #fff;
      text-align: center;
    }
    svg {
      margin-top: 10px;
      color: #fff;
      margin-left: 10px;
      font-size: 15px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
