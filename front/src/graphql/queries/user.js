import gql from 'graphql-tag';

export const LOGIN = gql`
  query LOGIN {
    user: logIn {
      id
      email
      username
    }
  }
`;
