import React from 'react';
import Axios from 'axios';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import ApplicantEditor from './components/applicant-editor/applicant-editor';
import ToastContainer from './components/toast/toast-container';
import './App.css';
import { API_URL } from './constants';

class App extends React.Component {

  state = {
    applicants: [],
    applicant: {},
    searchFieldValue: "",
    toastes: [],
  }

  componentWillMount() {
    this.getApplicants();
  }

  getApplicants = () => {
    const self = this;
    Axios
      .get(`${API_URL}/applicants/`)
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

  handleTextAreValueChange = (name, value) => {
    this.setState({
      pendingApplicant: { ...this.state.pendingApplicant, [name]: value}
    });
  }

  createNewApplicant = () => {
    const self = this;
    return new Promise((resolve, reject) => {
      Axios
        .post(`${API_URL}/applicants/`)
        .then((response) => {
          if (response.status === 200) {
            self.setState({ pendingApplicant: {} });
            resolve(response.data.id)
          }
        })
        .catch((error) => {
          reject(error.message)
        });
    })

  }

  handleSearchInput = (event) => {
    this.setState({ searchFieldValue: event.target.value });

    const self = this;

    Axios
      .get(`${API_URL}/applicants?name=${self.state.searchFieldValue}`)
      .then((response) => {
        if(response.status === 200){
          self.setState({ applicants: response.data });
        }
      })
      .catch((error) => {
        self.showNewToast(`There was an error with search. "${error.message}"`);
      });
  }

  showNewToast = (text) => {
    const currentToastes = this.state.toastes;
    let newToast = {};
    if (currentToastes.length === 0) {
      newToast = {
        id: 0,
        message: text,
      }
    } else {
      newToast = {
        id: currentToastes[currentToastes.length-1].id+1,
        message: text,
      }
    }
    const updatedToastes = currentToastes.concat(newToast);
    this.setState({
      toastes: updatedToastes,
    });
  }

  dismissToast = (toast) => {
    const currentToastes = this.state.toastes;
    const updatedToastes = currentToastes.filter(_toast => _toast.id !== toast.id);
    this.setState({
      toastes: updatedToastes,
    })
  }

  noop = () => {};

  render() {
    return(
      <Router>
        <div>
          <Header
            searchFieldValue={this.state.searchFieldValue}
            handleSearchInput={this.handleSearchInput}
          />
          <Switch>
              <Route exact={true} path="/" render={(props) => (
                <Home
                  applicants={this.state.applicants}
                  {...props}/>
              )} />
              <Route path="/applicants/:id" render={({ match, props }) => (
                  <ApplicantEditor
                    applicant={this.state.applicants.find(applicant => applicant.id === match.params.id)}
                    updateApplicantField={this.updateApplicantField}
                    handleTextAreValueChange={this.noop}
                    {...props}
                  />
                )
              }/>
              <Route exact={true} path="/add-new-applicant/" render={(props) => {
                const applicant = {
                  id: "new-applicant",
                  name: "Name",
                };
                return(
                  <ApplicantEditor
                    applicant={applicant} {...props}
                    updateApplicantField={this.noop}
                    handleTextAreValueChange={this.handleTextAreValueChange}
                    createNewApplicant={this.createNewApplicant}
                    pendingApplicant={this.state.pendingApplicant}
                    showNewToast={this.showNewToast}
                    dismissToast={this.dismissToast}
                  />
              )}}/>
          </Switch>
          <ToastContainer
            toastes={this.state.toastes}
            dismissToast={this.dismissToast}
          />
        </div>
      </Router>
    )
  }
};

export default App;
