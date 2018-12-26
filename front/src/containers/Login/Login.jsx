import React, { Component } from 'react';

import { GoogleLoginForm } from '../../components/GoogleLoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { googleUser: null };
  }

  onGoogleConnectionSuccess = (response) => {
    this.setState({ googleUser: response });
    localStorage.setItem('accessToken', response.tokenObj.access_token);
    this.setRefreshTimeout(response.tokenObj.expires_at);
  };

  setRefreshTimeout = (expiresAt) => {
    setTimeout(this.reloadAuthToken, 5000);
  }

  reloadAuthToken = async () => {
    const response = await this.state.googleUser.reloadAuthResponse()
      .catch((err) => {
        localStorage.removeItem('accessToken');
      });

    localStorage.setItem('accessToken', response.access_token);
    this.setRefreshTimeout(response.expires_at);
  }

  render() {
    return (
      <GoogleLoginForm
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={this.onGoogleConnectionSuccess}
      />
    );
  }
}

export default Login;
