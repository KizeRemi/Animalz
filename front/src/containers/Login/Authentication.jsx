import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { func, bool, node } from 'prop-types';
import { GoogleLogin } from 'react-google-login';

import { GET_CURRENT_USER } from '../../graphql/queries/user';
import { SET_TOKEN } from '../../graphql/mutations/app';

class Authentication extends Component {
  static propTypes = {
    isSignedIn: bool,
    onAuthCompleted: func,
    children: node.isRequired,
  }

  static defaultProps = {
    isSignedIn: false,
    onAuthCompleted: () => {},
  }

  constructor(props) {
    super(props);
    this.state = { googleUser: null };
  }

  onGoogleConnectionSuccess = (response) => {
    this.setState({ googleUser: response });
    localStorage.setItem('accessToken', response.tokenObj.access_token);
    this.setRefreshTimeout(response.tokenObj.expires_at);
  };

  setRefreshTimeout = () => {
    setTimeout(this.reloadAuthToken, 350000);
  }

  reloadAuthToken = async () => {
    const response = await this.state.googleUser.reloadAuthResponse()
      .catch(() => {
        this.setToken({ variables: { token: null } });
      });
    this.setToken({ variables: { token: response.access_token } });
    this.setRefreshTimeout(response.expires_at);
  }

  render() {
    const { googleUser } = this.state;
    const { children, onAuthCompleted, isSignedIn } = this.props;

    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={this.onGoogleConnectionSuccess}
        onFailure={this.onGoogleConnectionFailure}
        isSignedIn={isSignedIn}
        render={({ onClick }) => (
          <Mutation mutation={SET_TOKEN} onCompleted={onAuthCompleted}>
            {(setToken) => {
              this.setToken = setToken;

              return (
                <Query
                  query={GET_CURRENT_USER}
                  skip={!this.state.googleUser}
                  fetchPolicy="network-only"
                  onCompleted={() => setToken({ variables: { token: googleUser.tokenObj.access_token } })}
                >
                  {({ loading }) => children({ loading, onClick })}
                </Query>
              );
            }}
          </Mutation>
        )}
      />
    );
  }
}

export default Authentication;
