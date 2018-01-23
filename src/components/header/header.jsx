import React from 'react';
import { Link } from 'react-router-dom';

import SearchField from './../search-field/search-field';
import './header.css';
import Logo from './../../images/gosee-logotype.svg';


const Header = (props) => (
  <header className="header">
    <nav className="header-navigation">
      <Link
        className="header-logo-wrap"
        to="/"
        aria-label="Home">
        <img src={Logo} className="header-logo-default" alt="Logo" />
      </Link>
      <SearchField
        searchFieldValue={props.searchFieldValue}
        handleSearchInput={props.handleSearchInput}
      />
      <Link
        className="header-add-new"
        to="/add-new-applicant/"
        aria-label="Add new applicant">
        Add new applicant
      </Link>
      {/* <div className="header-user">
        <span className="header-user-name">
        </span>
        <div className="header-user-avatar-wrapper">
          <img className="header-user-avatar" src={Avatar} alt="user-avatar" />
        </div>
      </div> */}
    </nav>

  </header>
);

export default Header;
