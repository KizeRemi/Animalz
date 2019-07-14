import React, { Component } from 'react';
import { FaGoogle } from 'react-icons/fa';

import Authentication from './Authentication';

class Login extends Component {

  render() {
    return (
      <Authentication>
        {({ loading, onClick }) => (
          <button disabled className="login-btn" type="button" onClick={onClick}>
            <FaGoogle size="1.2em" color="#FFFFFF" className="icon-google" />
            <span>{loading ? "Loading" : "Login with google"}</span>
          </button>
        )}
      </Authentication>
    );
  }
}

export default Login;
