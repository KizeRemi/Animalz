import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

import { TopMenu, LeftMenu } from '../Sidebar';
import { PublicRouter } from '../Router';
import { USER_HAS_TOKEN } from '../../graphql/queries/app';
import { Authentication } from '../Login';

import './styles.css';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { initAuthGoogle: localStorage.getItem('accessToken') };
  }

  render() {
    return (
      <Fragment>
        {this.state.initAuthGoogle ? (
          <Authentication
            isSignedIn
            onAuthCompleted={() => this.setState({ initAuthGoogle: false })}
          >
            {() => <div>Loading</div>}
          </Authentication>
        ) : (
          <Query query={USER_HAS_TOKEN}>
            {({ data: { App: { token } = {} } }) => {
              console.log(token)
              return (
                <div id="app-content">
                  <LeftMenu />
                  <div id="page-content">
                    <TopMenu isConnected={token}/>
                    <PublicRouter token={token} />
                  </div>
                </div>
              );
            }}
          </Query>
        )}
      </Fragment>
    );
  }
}

export default AppLayout;
