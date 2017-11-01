import React from 'react';

import './search-field.css';

const SearchField = () => (
  <div className="search-field-wrapper">
    <div className="search-field">
      <i className="fa fa-search search-field-icon"></i>
      <input className="search-field-input" val="Lorem Ipsum"></input>
    </div>
  </div>
);

export default SearchField;
