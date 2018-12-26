import gql from 'graphql-tag';

export const USER_HAS_TOKEN = gql`
  query USER_HAS_TOKEN {
    App @client {
      token
    }
  }
`;
