import React from 'react';

import './search-field.css';

const SearchField = (props) => (
  <div className="search-field-wrapper">
    <div
      className="search-field"
      style={{ display: window.location.pathname === "/" ? 'flex': 'none'}}
    >
      <i className="fa fa-search search-field-icon"></i>
      <input
        type="text"
        onChange={props.handleSearchInput}
        value={props.searchFieldValue}
        className="search-field-input">
      </input>
    </div>
  </div>
);

export default SearchField;
