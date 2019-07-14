import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { IntlProvider } from 'react-intl';

import client from './graphql/client';
import { fr, en } from './i18n';
import { AppLayout } from './containers/AppLayout';
import { LanguageContext } from './store/LanguageProvider';

import './normalize.css';
import './App.css';

const messages = {
  en,
  fr,
};

const App = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </ApolloProvider>
    </IntlProvider>
  );
};

export default App;
