import React from 'react';
import { string } from 'prop-types';
import { Route, Redirect, Switch } from 'react-router';

import { ROUTE_HOME, ROUTE_PROFILE } from '../../constants/routes';
import { Home } from '../Home';
import { Profile } from '../Profile';

const Router = ({ token }) => (
  <Switch>
    <Route path={ROUTE_HOME} component={Home} />
    {token && <Route path={ROUTE_PROFILE} component={Profile} />}
    <Redirect to={ROUTE_HOME} />
  </Switch>
);

Router.propTypes = {
  token: string,
};

Router.defaultProps = {
  token: null,
};

export default Router;
