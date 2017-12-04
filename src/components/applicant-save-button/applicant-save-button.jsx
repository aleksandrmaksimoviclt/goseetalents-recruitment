import React from 'react';
import { withRouter } from 'react-router-dom';

import './applicant-save-button.css';

const ApplicantSaveButton = (props) => {

  this.saveApplicant = () => {
    props.createNewApplicant()
    .then((response) => {
      props.history.push('/');
    })
    .catch(error => props.showNewToast(`There was an error while saving. ${error.message}`));
  }

  return (
    <div className="applicant-editor-controls save">
      <i onClick={ () => this.saveApplicant() } className="fa fa-floppy-o small-icon" aria-hidden="true"></i>
      <span className="applicant-editor-controls-text">
        Save
      </span>
    </div>
  );
}

export default withRouter(ApplicantSaveButton);
