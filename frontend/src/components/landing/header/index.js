import React from 'react'

// Images
import LogoPanflix from '../../../img/landing/logo-white.png';

// Styled components
import { HeaderContainer, LogoContainer, NavContainer } from './styled';

import ModalRegistro from '../modals/registro';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer id="logo">
        <a href="./" id="home">
          <img src={LogoPanflix} alt="Logo"/>
        </a>
      </LogoContainer>
      <NavContainer id="nav">
        <ModalRegistro/>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
