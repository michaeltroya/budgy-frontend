import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux Imports
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const authenticated = useSelector(state => state.user.authenticated);

  return (
    <Route
      {...rest}
      render={props => (authenticated === false ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default AuthRoute;
