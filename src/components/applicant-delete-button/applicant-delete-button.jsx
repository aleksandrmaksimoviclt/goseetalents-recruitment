import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from './../../constants.js';
import './applicant-delete-button.css';

const ApplicantDeleteButton = (props) => {
  const deleteApplicant = (applicantID) => {
    Axios
      .delete(`${API_URL}/applicants/${applicantID}/`)
      .then((response) => {
        if(response.status === 204) {
          props.removeApplicantFromState(applicantID);
          props.history.push('/');
        }
      })
      .catch(error => props.showNewToast(`There was an error while deleting. ${error.message}`));
  }

return (
  <div
    tabIndex="0"
    onClick={ () => deleteApplicant(props.applicantID) }
    className="applicant-editor-controls delete">
    <i className="fa fa-trash-o small-icon"
      aria-hidden="true">
    </i>
    <span className="applicant-editor-controls-text ">
      Delete
    </span>
  </div>
);
}

export default withRouter(ApplicantDeleteButton);
