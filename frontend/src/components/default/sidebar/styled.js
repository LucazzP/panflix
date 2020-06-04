import styled from 'styled-components';

export const SidebarHolder = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: calc(6rem+2px);
  width: 6rem;
  height: 100vh;
  z-index: 0;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #333,
    #000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #333,
    #000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: rgba(0, 0, 0, 0.3);
  clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%);
  a#home {
    cursor: pointer;
  }
`;

export const Nav = styled.div`
  margin-bottom: 10vh;
  flex: 1;
  &,
  a,
  button {
    color: #fff;
    font-size: 22px;
    padding-top: 30px;
    &:hover {
      -webkit-filter: drop-shadow(0px 0px 4px rgba(110, 220, 220, 1));
      filter: drop-shadow(0px 0px 4px rgba(110, 220, 220, 1));
    }
  }
`;
