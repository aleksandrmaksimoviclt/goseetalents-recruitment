import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Home from './components/home/home';
import Header from './components/header/header';

import ApplicantEditor from './components/applicant-editor/applicant-editor';
import Applicants from './applicants.json';

import './App.css';

class App extends React.Component {

  state = {
    applicants: Applicants,
  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/applicants/:id" render={({ match }) => (
                <ApplicantEditor applicant={this.state.applicants.find(a => a.id === match.params.id)} />
              )}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
