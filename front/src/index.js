import React from 'react';
import ReactDOM from 'react-dom';
import frReact from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';

import App from './App';
import LanguageProvider from './store/LanguageProvider';

addLocaleData([...frReact]);

ReactDOM.render(
  <LanguageProvider>
      <App />
  </LanguageProvider>,
  document.getElementById('root'),
);
