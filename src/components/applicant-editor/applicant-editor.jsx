import React from 'react';

import './applicant-editor.css';


const Applicant = (props) => (
  <div className="container">
    <div className="applicant-wrapper">
      {/* <i className="fa fa-long-arrow-left arrow-back" aria-hidden="true"></i> */}
      <div className="applicant-name-wrapper">
        <div className="applicant-name">{ props.applicant.name }</div>
      </div>
      <div className="container">
        <div className="applicant-notes">
          { props.applicant.misc.notes }
        </div>
        <div className="applicant-misc">
          <div className="applicant-tipper-wrapper">
            <div className="applicant-label">
              Tipper
            </div>
            <div className="applicant-tipper-field applicant-item">
              { props.applicant.misc.tipper }
            </div>
          </div>
          <div className="applicant-reminder-wrapper">
            <div className="applicant-label">
              Reminder
            </div>
            <div className="applicant-reminder applicant-item">
              { props.applicant.misc.reminder }
            </div>
          </div>
          <div className="applicant-notinttech-wrapper">
            <div className="applicant-label">
              No interest in
            </div>
            <div className="applicant-technologies applicant-item">
              { props.applicant.misc.notinttech }
            </div>
          </div>
          <div className="applicant-whynotint-wrapper">
            <div className="applicant-label">
              Reason
            </div>
            <div className="applicant-reason applicant-item">
              { props.applicant.misc.whynotint }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Applicant;
