import React from 'react';

import { Link } from 'react-router-dom';

import './list.css';

const List = (props) => {
  if(props.applicants !== undefined) {

    const sortedApplicants = props.applicants.sort((a,b) => a.name.localeCompare(b.name));

    return (
      <div className="container">
        <div className="applicant-list">
          {sortedApplicants.map(applicant => (
            <div key={applicant._id} className="list-item-preview">
              <Link
                style={{ width: '100%' }}
                className="list-item-link"
                key={applicant._id}
                to={{
                  pathname: `/applicants/${applicant._id}`,
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
