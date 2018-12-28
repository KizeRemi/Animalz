import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { GoogleLogout } from 'react-google-login';

import { SET_TOKEN } from '../../graphql/mutations/app';

class Logout extends Component {

  onGoogleLogoutSuccess = () => {
    localStorage.removeItem('accessToken');
    this.setToken({ variables: { token: null } });
  };

  render() {
    return (
      <Mutation mutation={SET_TOKEN}>
        {(setToken) => {
          this.setToken = setToken;

          return (
            <GoogleLogout
              buttonText="Logout"
              onLogoutSuccess={this.onGoogleLogoutSuccess}
            >
              <span>Déconnexion</span>
            </GoogleLogout>
          );
        }}
      </Mutation>
    );
  }
}

export default Logout;
