/* global gapi */
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
    username: "",
    email: "",
    profilePicUrl: "",
    showMoreOptions: false,
    isAuthenticated: false,
    showDeleteConfirmation: false
  }

  componentWillMount() {
    this.getApplicants();
  }

  getApplicants = () => {
    const self = this;
    Axios
      .get(`${API_URL}/applicants/`, {withCredentials: true})
      .then((response) => {
        if (response.status === 200 && response.data !== null) {
          self.setState({ applicants: response.data });
          return;
        }
        self.showNewToast(`Couldn't retrieve applicants.`);
      })
      .catch((error) => {
        self.showNewToast(`Couldn't retrieve applicants. "${error.message}"`);
      });
  }

  addNewApplicantToState = (applicant) => {
    this.setState({applicants: this.state.applicants.concat(applicant)});
  }

  removeApplicantFromState = (applicantID) => {
    this.setState({applicants: this.state.applicants.filter(_applicant => _applicant._id !== applicantID) })
  }

  updateApplicantField = (applicantID, fieldName, value) => {
    const self = this;
    const currentApplicant = this.state.applicants.find(applicant => applicant._id === applicantID);

    if(!(currentApplicant[fieldName] === value)) {

      currentApplicant[fieldName] = value;

      Axios
        .put(`${API_URL}/applicants/${applicantID}/`, currentApplicant, {withCredentials: true})
        .then((response) => {
          if(response.status === 204){
            const updatedApplicants = this.state.applicants.map((applicant) => {
              if (applicant._id === applicantID) {
                currentApplicant.lastsaved = Date.now();
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
          self.showNewToast(`Couldn't update field. "${error.message}"`);
        });
    }

    return;
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
        .post(`${API_URL}/applicants/`, self.state.pendingApplicant, {withCredentials: true})
        .then((response) => {
          if (response.status === 200) {
            self.addNewApplicantToState(response.data);
            self.setState({ pendingApplicant: {} });
            resolve(response.data.id);
          }
        })
        .catch((error) => {
          reject(error.message);
        });
    })
  }

  handleSearchInput = (event) => {
    this.setState({ searchFieldValue: event.target.value });

    const self = this;

    Axios
      .get(`${API_URL}/applicants?name=${event.target.value}`, {withCredentials: true})
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

  validateIdToken = (idToken) => {
    const self = this;

    Axios
      .post(`${API_URL}/auth/google/`,
        {
          idToken: idToken
        }
      )
      .then((response) => {
        if (response.status === 200) {
          self.getApplicants();
        }
      })
      .catch((error) =>{
        self.showNewToast(error.message);
      });
  }

  onSignIn = (User) => {
    const profile = User.getBasicProfile();
    const idToken = User.getAuthResponse().id_token;
    this.validateIdToken(idToken);
    this.setState({
      username: profile.getName(),
      email: profile.getEmail(),
      profilePicUrl: profile.getImageUrl(),
      isAuthenticated: true
    });
  }

  onSignOut = () => {
    const self = this;
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      self.setState({ isAuthenticated: false, showMoreOptions: false, applicants: [] });
      self.showNewToast('User signed out.');
    });
  }

  handleShowMoreOptions = () => {
    this.setState({ showMoreOptions: !(this.state.showMoreOptions) });
  }

  handleShowDeleteConfirmation = () => {
    console.log('handleShowMoreOptions');
    this.setState({ showDeleteConfirmation: !(this.state.showDeleteConfirmation) })
  }

  noop = () => {};

  render() {
    return(
      <Router>
        <div>
          <Header
            searchFieldValue={this.state.searchFieldValue}
            handleSearchInput={this.handleSearchInput}
            onSignIn={this.onSignIn}
            onSignOut={this.onSignOut}
            username={this.state.username}
            profilePicUrl={this.state.profilePicUrl}
            email={this.state.email}
            isAuthenticated={this.state.isAuthenticated}
            handleShowMoreOptions={this.handleShowMoreOptions}
            showMoreOptions={this.state.showMoreOptions}
          />
          <Switch>
              <Route exact={true} path="/" render={(props) => (
                <Home
                  applicants={this.state.applicants}
                  {...props}/>
              )} />
              <Route path="/applicants/:id" render={({ match, props }) => {
                return(
                  <ApplicantEditor
                    applicant={this.state.applicants.find(applicant => applicant._id === match.params.id)}
                    removeApplicantFromState={this.removeApplicantFromState}
                    updateApplicantField={this.updateApplicantField}
                    handleTextAreValueChange={this.noop}
                    showDeleteConfirmation={this.state.showDeleteConfirmation}
                    handleShowDeleteConfirmation={this.handleShowDeleteConfirmation}
                    {...props}
                  />
                )
              }}/>
              <Route exact={true} path="/add-new-applicant/" render={(props) => {
                const applicant = {
                  _id: "new-applicant",
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
