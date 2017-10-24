import React, { Component } from 'react';
import './App.css';
import './fonts/font-awesome/css/font-awesome.css';


import Header from './components/header/header';
import SearchField from './components/search-field/search-field';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchField />
      </div>
    );
  }
}

export default App;
