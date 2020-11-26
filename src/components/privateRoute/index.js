import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { healthAppRoutes } from '../../navigation/healthAppRoutes';

export const PrivateRoute = ({ children, ...rest}) => {
  const loggedIn = !(localStorage.getItem('loggedIn') === null) ? JSON.parse(localStorage.getItem('loggedIn')) : false;

  return (
    <Route
      {...rest}
      render={({location}) => (
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: healthAppRoutes.login,
              state: {from: location}
            }}
          />
        )
      )}
    />
  );
};
