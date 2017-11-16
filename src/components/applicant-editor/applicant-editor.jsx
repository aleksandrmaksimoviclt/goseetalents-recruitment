import React from 'react';
import Textarea from './../textarea/textarea';

import './applicant-editor.css';
import ApplicantDeleteButton from './../applicant-delete-button/applicant-delete-button';

const ApplicantEditor = (props) => {
  if(props.applicant !== undefined) {
    return (
      <div className="container">
        <div className="applicant-wrapper">
          {/* <div className="applicant-editor-navigaion">
            <Link
              className="arrow-back"
              to={{
                pathname: `/`,
              }}
            >
              <i className="fa fa-chevron-left"></i>
            </Link>
          </div> */}
          <div className="applicant-editor-body">
            <div className="applicant-name-wrapper">
              <Textarea
                name="name"
                applicant={props.applicant}
                updateApplicantField={props.updateApplicantField}
              />
            </div>
            <div className="container">
              <div className="applicant-notes-wrapper">
                <Textarea
                  name="notes"
                  applicant={props.applicant}
                  updateApplicantField={props.updateApplicantField}
                />
              </div>
              <div className="applicant-misc">
                <div className="applicant-tipper-wrapper">
                  <div className="applicant-label">
                    Tipper
                  </div>
                  <Textarea
                    name="tipper"
                    applicant={props.applicant}
                    updateApplicantField={props.updateApplicantField}
                  />
                </div>
                <div className="applicant-reminder-wrapper">
                  <div className="applicant-label">
                    Reminder
                  </div>
                  <Textarea
                    name="reminder"
                    applicant={props.applicant}
                    updateApplicantField={props.updateApplicantField}
                  />
                </div>
                <div className="applicant-notinttech-wrapper">
                  <div className="applicant-label">
                    No interest in
                  </div>
                  <Textarea
                    name="notinttech"
                    applicant={props.applicant}
                    updateApplicantField={props.updateApplicantField}
                  />
                </div>
                <div className="applicant-whynotint-wrapper">
                  <div className="applicant-label">
                    Reason
                  </div>
                  <Textarea
                    name="whynotint"
                    applicant={props.applicant}
                    updateApplicantField={props.updateApplicantField}
                  />
                </div>
              </div>
            </div>
          </div>
          {props.applicant.id !== undefined &&
            <ApplicantDeleteButton
              applicantID={props.applicant.id}
            />
          }
        </div>
      </div>
    );
  }
  return null
}
export default ApplicantEditor;
