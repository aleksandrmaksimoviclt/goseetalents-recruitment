import React from 'react';
import Axios from 'axios';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import ApplicantEditor from './components/applicant-editor/applicant-editor';
import './App.css';
import { API_URL } from './constants';

class App extends React.Component {

  state = {
    applicants: [],
  }

  componentWillMount() {
    this.getApplicants();
  }
  
  getApplicants = () => {
    const self = this;
    Axios
      .get(`${API_URL}/applicants`)
      .then((response) => {
        if (response.status === 200) {
          self.setState({ applicants: response.data });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  updateApplicantField = (applicantID, fieldName, value) => {
    const self = this;
    const currentApplicant = this.state.applicants.find(applicant => applicant.id === applicantID);
    currentApplicant[fieldName] = value;

    Axios
      .put(`${API_URL}/applicants/${applicantID}/`, currentApplicant)
      .then((response) => {
        if(response.status === 204){
          const updatedApplicants = this.state.applicants.map((applicant) => {
            if (applicant.id === applicantID) {
              return currentApplicant
            }
            return applicant;
          });
          self.setState({
            applicants: updatedApplicants,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/applicants/:id" render={({ match }) => (
                <ApplicantEditor
                  applicant={this.state.applicants.find(applicant => applicant.id === match.params.id)}
                  updateApplicantField={this.updateApplicantField}
                />
              )}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
