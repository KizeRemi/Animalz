import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider } from 'react-intl';

import client from './graphql/client';
import { fr } from './i18n';
import { AppLayout } from './containers/AppLayout';

import './normalize.css';
import './App.css';

const App = () => (
  <IntlProvider locale="fr" messages={fr}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ApolloProvider>
  </IntlProvider>
);

export default App;
