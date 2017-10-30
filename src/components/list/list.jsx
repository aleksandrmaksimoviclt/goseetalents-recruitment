import React from 'react';

import { Link, } from 'react-router-dom';

import './list.css';

const List = (props) => (
  <div className="list-wrapper">
    {props.applicants.map(applicant => (
      <Link
        className="list-item-preview"
        style={{ width: '100%' }}
        key={applicant.id}
        to={{
          pathname: `/applicants/${applicant.id}`,
          state: { modal: true }
        }} >
        <div className="list-item-info-wrapper">
          <div className="list-item-name">
            {applicant.name}
          </div>
          <div className="list-item-important-stuff">
            {applicant.misc.notes}
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default List;
