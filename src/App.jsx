import React from 'react';
import Axios from 'axios';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Home from './components/home/home';
import Header from './components/header/header';

import ApplicantEditor from './components/applicant-editor/applicant-editor';

import './App.css';

const API_URL = 'http://192.168.38.11:8080';
const APPLICANT_URL = `${API_URL}/applicants`;
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
      .get('http://192.168.38.11:8080/applicants/')
      .then((response) => {
        if (response.status === 200) {
          self.setState({ applicants: response.data });
        }
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
  }

  updateApplicantField = (applicantID, fieldName, value) => {
    const self = this;
    const currentApplicant = this.state.applicants.find(applicant => applicant.id === applicantID);
    currentApplicant[fieldName] = value;

    Axios
      .put(`${APPLICANT_URL}/${applicantID}/`, currentApplicant)
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
