import React from 'react';
import { Link } from 'react-router-dom';

import SearchField from './../search-field/search-field';
import './header.css';
import Logo from './../../images/gosee-logotype.svg';
import MoreOptions from './../../images/ic_more_vert_black_24px.svg'
import GoogleSignInButton from './../../components/google-signin-button/google-signin-button';
import GoogleSignOutButton from './../../components/google-signout-button/google-signout-button';


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
      {props.isAuthenticated === false &&
        <GoogleSignInButton
          onSignIn={props.onSignIn}
        />
      }
      {props.isAuthenticated === true &&
        <div className="header-user-wrapper">
          <div className="header-user">
            <img className="more-options-buttons" onClick={props.handleShowMoreOptions} src={MoreOptions} alt="Three vertical dots" />
            <div className="header-user-avatar-wrapper">
              <img className="header-user-avatar" src={props.profilePicUrl} alt="user-avatar" />
            </div>
          </div>
        </div>
      }
    </nav>

    {props.isAuthenticated === true && props.showMoreOptions === true &&
      <div className="more-options">
        <div className="account-wrapper">
          <img className="avatar" src={props.profilePicUrl} alt="user-avatar" />
          <div className="user-wrapper">
            <div className="user-name">
              {props.username}
            </div>
            <div className="user-email">
              {props.email}
            </div>
          </div>
        </div>
        <div className="user-controls">
          <div className="logout-button">
            <GoogleSignOutButton
              onSignOut={props.onSignOut}
            />
          </div>
        </div>

      </div>
    }
  </header>
);

export default Header;
