import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import { Home } from '../Home';

import {
  ROUTE_HOME,
} from '../../constants/routes';

const PrivateRouter = () => (
  <Switch>
    <Route path={ROUTE_HOME} component={Home} />
    <Redirect to={ROUTE_HOME} />
  </Switch>
);

export default PrivateRouter;
