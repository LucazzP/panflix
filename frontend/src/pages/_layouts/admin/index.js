import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Bg } from '../styles';
import SidebarAdmin from '~/components/default/sidebar/admin';
// import HeaderAdmin from '~/components/default/header/admin';

export default function AuthLayout({ children }) {
  return (
    <Wrapper className="flex row alignStart justifyEnd">
      <SidebarAdmin />
      <Container>
        <Bg />
        {children}
      </Container>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
