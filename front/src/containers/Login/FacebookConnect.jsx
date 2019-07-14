import React, { useState } from 'react';
import { Query, Mutation } from 'react-apollo';
import FacebookLogin from 'react-facebook-login';

import { LOGIN_FACEBOOK } from '../../graphql/queries/user';
import { SET_TOKEN } from '../../graphql/mutations/app';

const FacebookConnect = () => {
  const [tokenFacebook, setTokenFacebook] = useState(null);

  return (
    <Mutation mutation={SET_TOKEN}>
      {setToken => (
        <Query
          query={LOGIN_FACEBOOK}
          skip={!tokenFacebook}
          variables={{ token: tokenFacebook }}
          onCompleted={(data) => {
            if (tokenFacebook) {
              setToken({ variables: { token: data.loginFacebook.token } });
            }
            setTokenFacebook(null);
          }}
        >
          {({ loading, error }) => {
            if (error) return `Error! ${error.message}`;
            if (loading) return '...loading';

            return (
              <FacebookLogin
                appId="305471547045305"
                scope="public_profile,email,user_birthday"
                fields="name,email,picture"
                callback={res => setTokenFacebook(res.accessToken)}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />
            );
          }}
        </Query>
      )}
    </Mutation>
  );
};

export default FacebookConnect;
