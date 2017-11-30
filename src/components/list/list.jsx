import React from 'react';

import { Link } from 'react-router-dom';

import './list.css';

const List = (props) => (
  <div className="container">
    <div className="applicant-list">
      {props.applicants.map(applicant => (
        <div key={applicant.id} className="list-item-preview">
          <Link
            style={{ width: '100%' }}
            className="hoverme"
            key={applicant.id}
            to={{
              pathname: `/applicants/${applicant.id}`,
            }} >
            <div className="list-item-info-wrapper">
              <div className="list-item-name">
                {applicant.name}
              </div>
              <div className="list-item-important-stuff">
                {applicant.notes}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default List;
