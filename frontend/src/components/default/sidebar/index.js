import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

// Images
import LogoPanflixRetina from '~/assets/logo/logo-retina.png';

// Styled components
import { SidebarHolder, LogoContainer, Nav } from './styled';

const Sidebar = () => {
  return (
    <SidebarHolder className="flex column alignCenter justifyStart">
      <LogoContainer
        className="flex column alignCenter justifyCenter"
        id="logo"
      >
        <a href="./" id="home">
          <img src={LogoPanflixRetina} alt="Logo" />
        </a>
      </LogoContainer>
      <Nav className="flex column alignCenter justifyEnd">
        <Link to="/login" id="login">
          <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
        <Link to="/register" id="register">
          <FontAwesomeIcon icon={faUserPlus} />
        </Link>
      </Nav>
    </SidebarHolder>
  );
};

export default Sidebar;
