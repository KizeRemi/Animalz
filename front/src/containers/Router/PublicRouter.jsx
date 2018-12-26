import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import { ROUTE_LOGIN } from '../../constants/routes';
import { Login } from '../Login';

const PublicRouter = () => (
  <Switch>
    <Route path={ROUTE_LOGIN} component={Login} />
    <Redirect to={ROUTE_LOGIN} />
  </Switch>
);

export default PublicRouter;
