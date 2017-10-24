import React from 'react';

import './header.css';
import Avatar from './../../images/photo2-min.jpg';
import Logo from './../../images/gosee-logotype.svg'

const Header = () => (
  <header className="header">
    <nav className="header-navigation">
      <a className="header-logo-wrap" href="/" aria-label="Home">
        <img src={Logo} className="header-logo-default" alt="Logo" />
      </a>
      {/* <ul className="header-tabs-wrapper">
        <li className="header-tabs">Tab 1</li>
        <li className="header-tabs">Tab 2</li>
        <li className="header-tabs">Tab 3</li>
      </ul> */}
      <div className="header-user">
        <span className="header-user-name">
          Aleksandr
        </span>
        <div className="header-user-avatar-wrapper">
          <img className="header-user-avatar" src={Avatar} alt="user-avatar" />
        </div>
      </div>
    </nav>

  </header>
);

export default Header;