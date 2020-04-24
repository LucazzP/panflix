import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Bg } from './styles';
import Sidebar from '~/components/default/sidebar/logged';
import Header from '~/components/default/header';

export default function AuthLayout({ children }) {
  return (
    <Wrapper className="flex row alignStart justifyEnd">
      <Sidebar />
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
