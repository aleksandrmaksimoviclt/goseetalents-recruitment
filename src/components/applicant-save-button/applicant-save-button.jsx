import React from 'react';
import { withRouter } from 'react-router-dom';

const ApplicantSaveButton = (props) => {

  this.saveApplicant = () => {
    props.createNewApplicant()
    .then((response) => {
      props.history.push('/');
    })
    .catch(error => console.log(`There was an error with message: ${error}`));
  }

  return (
    <div className="applicant-editor-controls">
      <i onClick={ () => this.saveApplicant() } className="fa fa-floppy-o small-icon" aria-hidden="true"></i>
    </div>
  );
}

export default withRouter(ApplicantSaveButton);
