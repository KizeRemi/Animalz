import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import { defaults } from './defaults';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_ENDPOINT_VEOLIA,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accessToken');

  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ extensions }) => console.log('err'));
  }
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([stateLink, errorLink, authLink, httpLink]),
  cache,
});

export default client;
