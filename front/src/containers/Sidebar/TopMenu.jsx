import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Login, Logout } from '../Login';
import { ROUTE_PROFILE } from '../../constants/routes';

import './TopMenu.css';

class TopMenu extends Component {

  render() {
    const { isConnected } = this.props;
    return (
      <div className="top-bar">
        {isConnected ? (
          <div className="menu-container">
            <NavLink to={ROUTE_PROFILE} activeClassName="active">
              MON PROFIL
            </NavLink>
            <Logout />
          </div>
        ) : (
          <Login />
        )}
      </div>
      
    );
  }
}

export default TopMenu;
