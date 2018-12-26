import React, { Component } from 'react';

import { PrivateRouter, PublicRouter } from '../Router';

class AppLayout extends Component {
  render() {
    const t = true;

    return (
      <div className="app-content">
        {t ? (
          <main><PublicRouter /></main>
        ) : (
          <main><PrivateRouter /></main>
        )}
      </div>
    );
  }
}

export default AppLayout;
