import React from 'react';
import { withRouter } from 'react-router-dom';

import './applicant-save-button.css';

const ApplicantSaveButton = (props) => {

  const saveApplicant = () => {
    props.createNewApplicant()
    .then(() => {
      props.showNewToast(`Saved successfully!`);
      props.history.push('/');
    })
    .catch(error => props.showNewToast(
      `There was an error while saving. Because: ${error}`)
    );
  }

  return (
    <div
      tabIndex="0"
      onClick={ () => saveApplicant() }
      className="applicant-editor-controls save">
        <i className="fa fa-floppy-o small-icon" aria-hidden="true"></i>
        <span className="applicant-editor-controls-text">
          Save
        </span>
    </div>
  );
}

export default withRouter(ApplicantSaveButton);
