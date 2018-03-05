/* global gapi */

import React from 'react';

class GoogleSignInButton extends React.Component {

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'height': 32,
      'theme': 'dark',
      'onsuccess': this.props.onSignIn
    });
  };

  render(){
    return(
      <div id="g-signin2"/>
    );
  }
}

export default GoogleSignInButton;
