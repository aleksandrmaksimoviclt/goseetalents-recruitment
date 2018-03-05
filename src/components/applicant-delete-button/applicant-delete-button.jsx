import Axios from 'axios';
// import onClickOutside from "react-onclickoutside";
import React from 'react';
import { withRouter } from 'react-router-dom';

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

  // const handleClickOutside = (event) => {
  //   console.log(event);
  // };

return (
  <div>
    { props.showDeleteConfirmation === false &&
      <div
        tabIndex="0"
        onClick={ props.handleShowDeleteConfirmation }
        className="applicant-editor-controls delete">
        <i className="fa fa-trash-o small-icon"
          aria-hidden="true">
        </i>
        <span className="applicant-editor-controls-text ">
          Delete
        </span>
      </div>
    }
    { props.showDeleteConfirmation === true &&
      <div onClick={ () => console.log('blur') }>
        <div
          onClick={ () => deleteApplicant(props.applicantID) }
          className="applicant-editor-controls delete"
        >
          <i className="fa fa-check small-icon"
            aria-hidden="true">
          </i>
          <span className="applicant-editor-controls-text ">
            Yes
          </span>
        </div>
        <div
          onClick={ props.handleShowDeleteConfirmation }
          className="applicant-editor-controls delete"
        >
          <i className="fa fa-times small-icon"
            aria-hidden="true">
          </i>
          <span className="applicant-editor-controls-text ">
            No
          </span>
        </div>
      </div>
    }
  </div>
);
}

// export default withRouter(onClickOutside(ApplicantDeleteButton, {
//   handleClickOutside: function(instance) {
//     console.log(instance);
//   }
// }));
export default withRouter(ApplicantDeleteButton);
