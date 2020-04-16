import styled from 'styled-components';

export const BannerWrapper = styled.div`
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
  top: 60px;
  width: 100%;
  position: absolute;
`;

export const BannerContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 60vh;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #333,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #333,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 2% 5% 0;
  border-radius: 0 0 20% 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MoviesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MovieCard = styled.div`
  border-radius: 5%;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #111,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #111, #000000);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
  transition: 1s all;
  &.hidden {
    opacity: 0 !important;
    z-index: -1 !important;
  }
  &.left {
    position: absolute;
    z-index: 2;
    bottom: -3%;
    left: 20%;
    opacity: 0.6;
    width: 20%;
    height: 90%;
    pointer-events: none;
  }
  &.right {
    position: absolute;
    z-index: 2;
    bottom: -3%;
    right: 20%;
    opacity: 0.6;
    width: 20%;
    height: 90%;
    pointer-events: none;
  }
  &.middle {
    position: absolute;
    z-index: 3;
    bottom: -10%;
    opacity: 1;
    width: 25%;
    height: 95%;
  }
`;

export const MoviePreview = styled.div`
  border-radius: 5%;
  width: 100%;
  height: 50%;
  iframe {
    border-radius: 5% 5% 10% 10%;
    width: 100%;
    height: 100%;
  }
`;

export const MovieDesc = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: top;
  height: 50%;
  padding: 3% 5% 0;
  div#text,
  div#btn {
    display: flex;
    flex-direction: column;
  }
  div#text {
    h3 {
      font-size: 24px;
      margin: 0;
      padding: 0 0 1%;
    }
    p {
      font-size: 14px;
      max-height: 110px;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  div#btn {
    padding-bottom: 6%;
    button {
      background: #ff141e;
      color: #fff;
      border: 0;
      border-radius: 10px;
      padding: 10px 15px;
      font-size: 16px;
      box-shadow: 0 0 10px rgba(255, 20, 30, 0.5);
      transition: 0.3s all;
    }
    button:hover {
      padding: 10px 20px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(255, 20, 30, 1);
    }
  }
`;

export const BannerBorder = styled.div`
  position: absolute;
  top: 45vh;
  height: 20vh;
  width: 100%;
  border-radius: 0 0 20% 5%;
  background: rgba(255, 20, 30, 1); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgba(56, 68, 184, 1),
    rgba(255, 20, 30, 1)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgba(56, 68, 184, 1),
    rgba(255, 20, 30, 1)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
