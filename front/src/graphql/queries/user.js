import gql from 'graphql-tag';

export const LOGIN = gql`
  query LOGIN {
    logIn {
      id
      email
      username
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    user: getCurrentUser {
      id
      email
      username
      picture
    }
  }
`;

export const LOGIN_FACEBOOK = gql`
  query LOGIN_FACEBOOK($token: String!) {
    loginFacebook (token: $token) {
      token
      message
      success
    }
  }
`;
