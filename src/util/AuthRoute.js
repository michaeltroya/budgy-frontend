import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux Imports
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.user.authenticated);
  const firstLogin = useSelector(state => state.user.firstLogin);
  return (
    <Route
      {...rest}
      render={props => {
        if (authenticated === false && (rest.path === '/dashboard' || rest.path === '/first-steps')) {
          return <Redirect to="/" />;
        } else if (authenticated === true && firstLogin === false && rest.path !== '/dashboard') {
          return <Redirect to="/dashboard" />;
        } else if (authenticated === true && firstLogin === true && rest.path !== '/first-steps') {
          return <Redirect to="/first-steps" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default AuthRoute;
