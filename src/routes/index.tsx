import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import ProtectedRoute from './ProtectedRoute';

// Hooks
import { useAuth } from '../hooks/auth';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute
        path="/home"
        exact
        isAuthenticated={isAuthenticated}
        component={Dashboard}
      />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
