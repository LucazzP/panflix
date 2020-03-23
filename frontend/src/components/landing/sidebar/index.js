import React from 'react'

// Images
import LogoPanflixRetina from '../../../assets/img/landing/logo-retina.png';
import ModalLogin from '../modals/login'
import ModalRegistro from '../modals/registro'

// Styled components
import { SidebarContainer, LogoContainer, NavContainer } from './styled';

const Sidebar = () => {
  return (
    <SidebarContainer className="flex column alignCenter justifyStart">
      <LogoContainer className="flex column alignCenter justifyCenter" id="logo">
        <a href="./" id="home">
          <img src={LogoPanflixRetina} alt="Logo"/>
        </a>
      </LogoContainer>
      <NavContainer className="flex column alignCenter justifyEnd">
        <ModalLogin/>
        <ModalRegistro/>
      </NavContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
