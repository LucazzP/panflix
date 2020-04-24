import styled from 'styled-components';

export const MovieInfo = styled.div`
  width: 100%;
  height: 100vh;
  .Image {
    height: 45%;
    img {
      height: 100%;
      border-radius: 30px;
    }
  }
  .Info {
    h1 {
      color: #fff;
      margin: 20px 0 0 10px;
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
