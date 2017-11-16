import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { API_URL } from './../../constants.js';

const ButtonToNavigate = (props) => {
  this.deleteApplicant = (applicantID) => {
    Axios
      .delete(`${API_URL}/applicants/${applicantID}/`)
      .then((response) => {
        if(response.status === 200) {
          props.history.push('/');
        }
      })
  }

return (
  <div className="applicant-editor-controls">
    <i onClick={ () => this.deleteApplicant(props.applicantID) } className="fa fa-trash-o small-icon" aria-hidden="true"></i>
  </div>
);
}

export default withRouter(ButtonToNavigate);
