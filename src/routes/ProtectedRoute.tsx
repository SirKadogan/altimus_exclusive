import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuthenticated) {
          return <Component />;
        }
        return (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
};
export default ProtectedRoute;
