import React from 'react';
import { Link } from 'react-router-dom';

// import SearchField from './../search-field/search-field';
import './header.css';
import Avatar from './../../images/photo2-min.jpg';
import Logo from './../../images/gosee-logotype.svg';


const Header = () => (
  <header className="header">
    <nav className="header-navigation">
      <Link
        className="header-logo-wrap"
        to="/"
        aria-label="Home">
        <img src={Logo} className="header-logo-default" alt="Logo" />
      </Link>
      {/* <SearchField /> */}
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
