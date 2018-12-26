import gql from 'graphql-tag';

export const SET_TOKEN = gql`
  mutation SET_TOKEN ($token: String) {
    setToken(token: $token) @client
  }
`;
