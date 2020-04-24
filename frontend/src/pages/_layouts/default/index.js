import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Bg } from './styles';
import Sidebar from '~/components/default/sidebar';

export default function DefaultLayout({ children }) {
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

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
