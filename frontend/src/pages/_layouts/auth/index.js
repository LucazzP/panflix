import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Sidebar from '~/components/default/sidebar';
import Header from '~/components/default/header';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      {children}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
