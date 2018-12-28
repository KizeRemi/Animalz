import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import { ROUTE_HOME, ROUTE_PROFILE } from '../../constants/routes';
import { Home } from '../Home';
import { Profile } from '../Profile';

const PublicRouter = ({ token }) => (
  <Switch>
    <Route path={ROUTE_HOME} component={Home} />
    {token && <Route path={ROUTE_PROFILE} component={Profile} />}
    <Redirect to={ROUTE_HOME} />
  </Switch>
);

export default PublicRouter;
