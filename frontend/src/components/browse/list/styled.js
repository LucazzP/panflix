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
  width: 300px;
  height: 360px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    .image {
      img {
        box-shadow: -5px 0 5px #ffffff55;
      }
    }
    .title {
      h3 {
      }
    }
  }
  .image {
    min-width: 200px;
    height: 83.3%;
    img {
      width: 100%;
      box-shadow: -5px 0 5px #ffffff33;
    }
  }
  .title {
    height: 16.7%;
    h3 {
      margin: 10px 0 0;
      font-weight: 300;
      color: #fff;
      text-align: center;
    }
  }
`;
