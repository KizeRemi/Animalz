import React from 'react';
import ReactDOM from 'react-dom';
import frReact from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';

import App from './App';

addLocaleData([...frReact]);

ReactDOM.render(React.createElement(App), document.getElementById('root'));
