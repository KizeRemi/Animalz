import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';

class LeftMenu extends Component {
  logout = () => {
    localStorage.removeItem('accessToken');
  }

  render() {

    return (
      <Menu
        pageWrapId="page-content"
        outerContainerId="app-content"
        customBurgerIcon={false}
        customCrossIcon={false}
      >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }
}

export default LeftMenu;
