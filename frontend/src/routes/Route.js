/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import AuthLayout from '../pages/_layouts/auth';
import AdminLayout from '../pages/_layouts/admin';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '~/store';

const RouteWrapper = ({
  component: Component,
  isPrivate,
  isAdmin,
  ...rest
}) => {
  const { signed } = store.getState().auth;
  const { profile } = store.getState().user;

  let admin = false;

  if (signed && profile.permissions === 10) {
    admin = true;
  }

  if ((!signed && isPrivate) || (!signed && isAdmin)) {
    toast.error('Você não tem permissão para acessar essa página!');
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate && !isAdmin) {
    return <Redirect to="/browse" />;
  }

  if (signed && !admin && isAdmin) {
    toast.error('Você não tem permissão para acessar essa página!');
    return <Redirect to="/browse" />;
  }

  let Layout = DefaultLayout;

  if (admin) {
    Layout = AdminLayout;
  } else {
    Layout = signed ? AuthLayout : DefaultLayout;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isAdmin: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isAdmin: false,
};
