import React from 'react'

// Images
import LogoPanflixRetina from '../../../img/landing/logo-retina.png';

// Styled components
import { SidebarContainer, LogoContainer } from './styled';

const Sidebar = () => {
  return (
    <SidebarContainer className="flex column alignCenter justifyStart">
      <LogoContainer className="flex column alignCenter justifyCenter" id="logo">
        <a href="./" id="home">
          <img src={LogoPanflixRetina} alt="Logo"/>
        </a>
      </LogoContainer>
      <NavContainer>
      </NavContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
