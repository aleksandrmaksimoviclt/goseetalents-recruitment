import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from './../../constants.js';

const ApplicantDeleteButton = (props) => {
  const deleteApplicant = (applicantID) => {
    Axios
      .delete(`${API_URL}/applicants/${applicantID}/`)
      .then((response) => {
        if(response.status === 200) {
          props.history.push('/');
        }
      })
      .catch(error => props.showNewToast(`There was an error while deleting. ${error.message}`));
  }

return (
  <div className="applicant-editor-controls">
    <i onClick={ () => deleteApplicant(props.applicantID) } className="fa fa-trash-o small-icon" aria-hidden="true"></i>
  </div>
);
}

export default withRouter(ApplicantDeleteButton);
