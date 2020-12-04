import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
// Components
import ProtectedRoute from './ProtectedRoute';

// Pages
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <ProtectedRoute path="/" exact isAuthenticated component={Dashboard} />
    <Redirect to="/login" />
  </Switch>
);

export default Routes;
