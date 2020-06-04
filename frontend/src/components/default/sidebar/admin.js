import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faUndoAlt,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

// Images
import LogoPanflixRetina from '~/assets/logo/logo-retina.png';

// Styled components
import { SidebarHolder, LogoContainer, Nav } from './styled';

const Sidebar = () => {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <SidebarHolder className="flex column alignCenter justifyStart">
      <LogoContainer
        className="flex column alignCenter justifyCenter"
        id="logo"
      >
        <a href="/" id="home">
          <img src={LogoPanflixRetina} alt="Logo" />
        </a>
      </LogoContainer>
      <Nav className="flex column alignCenter justifyEnd">
        <a href="/admin" id="return">
          <FontAwesomeIcon icon={faUserShield} />
        </a>
        <button type="button" onClick={history.goBack} id="return">
          <FontAwesomeIcon icon={faUndoAlt} />
        </button>
        <button type="button" onClick={handleSignOut} id="sair">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </Nav>
    </SidebarHolder>
  );
};

export default Sidebar;
