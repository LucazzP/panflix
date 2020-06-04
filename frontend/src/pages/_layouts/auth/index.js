import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Bg } from '../styles';
import SidebarAuth from '~/components/default/sidebar/logged';

export default function AuthLayout({ children }) {
  return (
    <>
      <Wrapper className="flex row alignStart justifyEnd">
        <SidebarAuth />
        <Container>
          <Bg />
          {children}
        </Container>
      </Wrapper>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
