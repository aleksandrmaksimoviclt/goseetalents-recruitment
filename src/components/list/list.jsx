import React from 'react';

import { Link } from 'react-router-dom';

import './list.css';

const List = (props) => {
  if(props.applicants !== undefined) {
    return (
      <div className="container">
        <div className="applicant-list">
          {props.applicants.map(applicant => (
            <div key={applicant.id} className="list-item-preview">
              <Link
                style={{ width: '100%' }}
                className="list-item-link"
                key={applicant.id}
                to={{
                  pathname: `/applicants/${applicant.id}`,
                }} >
                <div className="list-item-info-wrapper">
                  <div className="list-item-name">
                    {applicant.name}
                  </div>
                  <div className="list-item-notes">
                    {applicant.notes}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
};

export default List;
