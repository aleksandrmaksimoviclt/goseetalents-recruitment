import React from 'react';
import { withRouter } from 'react-router-dom';

import './applicant-save-button.css';

const ApplicantSaveButton = (props) => {

  this.saveApplicant = () => {
    props.createNewApplicant()
    .then((response) => {
      props.history.push('/');
    })
    .catch(error => console.log(`There was an error with message: ${error}`));
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
