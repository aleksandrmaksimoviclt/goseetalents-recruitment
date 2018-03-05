import React from 'react';
import Textarea from './../textarea/textarea';

import './applicant-editor.css';
import ApplicantSaveButton from './../applicant-save-button/applicant-save-button';
import ApplicantDeleteButton from './../applicant-delete-button/applicant-delete-button';


const ApplicantEditor = (props) => {

  if (props.applicant === undefined) {
    return null
  }

  return (
    <div className="container">
        <div className="applicant-wrapper">
          <div className="applicant-editor-body">
            <div className="applicant-name-wrapper">
              <Textarea
                name="name"
                applicant={props.applicant}
                updateApplicantField={props.updateApplicantField}
                handleTextAreValueChange={props.handleTextAreValueChange}
              />
            </div>
            <div className="container">
              <div className="applicant-notes-wrapper">
                <Textarea
                  name="notes"
                  applicant={props.applicant}
                  updateApplicantField={props.updateApplicantField}
                  handleTextAreValueChange={props.handleTextAreValueChange}
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
                    handleTextAreValueChange={props.handleTextAreValueChange}
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
                    handleTextAreValueChange={props.handleTextAreValueChange}
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
                    handleTextAreValueChange={props.handleTextAreValueChange}
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
                    handleTextAreValueChange={props.handleTextAreValueChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {props.applicant.lastsaved !== undefined &&
          <div className="applicant-last-modified-wrapper">
            <span className="last-modified">Last saved:</span><br/>
            <span className="last-modified value">
              {new Date(props.applicant.lastsaved).toDateString()}
            </span>
            <br/>
            <span className="last-modified value">
              {new Date(props.applicant.lastsaved).toTimeString().split(' ')[0]}
            </span>
            <br/>
          </div>
          }
        </div>


        {props.applicant._id !== "new-applicant" &&
          <ApplicantDeleteButton
            applicantID={props.applicant._id}
            showNewToast={props.showNewToast}
            dismissToast={props.dismissToast}
            showDeleteConfirmation={props.showDeleteConfirmation}
            handleShowDeleteConfirmation={props.handleShowDeleteConfirmation}
            removeApplicantFromState={props.removeApplicantFromState}
          />
        }

        {props.applicant._id === "new-applicant" &&
          <ApplicantSaveButton
            showNewToast={props.showNewToast}
            dismissToast={props.dismissToast}
            createNewApplicant={props.createNewApplicant}
          />
        }

    </div>
  );
}
export default ApplicantEditor;
