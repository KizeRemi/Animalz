import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { FormattedMessage } from 'react-intl';
import { string, func } from 'prop-types';

import './GoogleLoginForm.css';

const GoogleLoginForm = ({ clientId, onSuccess }) => (
  <GoogleLogin
    className="login-btn"
    clientId={clientId}
    onSuccess={onSuccess}
    isSignedIn
    prompt="consent"
  >
  </GoogleLogin>
);

GoogleLoginForm.propTypes = {
  clientId: string.isRequired,
  onSuccess: func.isRequired,
};

export default GoogleLoginForm;
