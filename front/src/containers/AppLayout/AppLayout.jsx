import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

import { Router } from '../Router';
import { USER_HAS_TOKEN } from '../../graphql/queries/app';
import { GET_CURRENT_USER } from '../../graphql/queries/user';
import HorizontalAppBar from '../../components/Menu/HorizontalAppBar';
import MenuLogin from '../../components/Menu/MenuLogin';
import { Logout } from '../Login';

import './styles.css';

const AppLayout = () => (
  <Query query={USER_HAS_TOKEN}>
    {({ data: { App: { token } = {} } }) => (
      <Query query={GET_CURRENT_USER} skip={!token}>
        {({ loading, data: { user } = {} }) => {
          return (
            <div id="app-content">
              <HorizontalAppBar>
                {!user ? (
                  <MenuLogin />
                ) : (
                  <Fragment>
                    <IconButton
                      aria-label="Account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Logout />
                  </Fragment>
                )}
              </HorizontalAppBar>
              <Router token={token} />
            </div>
          );
        }}
      </Query>
    )}
  </Query>
);

export default AppLayout;
