import styled from 'styled-components';

export const SidebarHolder = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: calc(6rem+2px);
  height: 100vh;
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    filter: blur(10px);
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
`;

export const SidebarContent = styled.aside`
  position: relative;
  width: 6rem;
  height: 100%;
  background: rgba(110, 220, 220, 1);
  background: -webkit-linear-gradient(
    to bottom,
    rgba(110, 220, 220, 1) 0%,
    rgba(43, 31, 174, 1) 10%,
    rgba(255, 20, 30, 1) 50%
  );
  background: linear-gradient(
    to bottom,
    rgba(110, 220, 220, 1) 0%,
    rgba(43, 31, 174, 1) 10%,
    rgba(255, 20, 30, 1) 50%
  );
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
