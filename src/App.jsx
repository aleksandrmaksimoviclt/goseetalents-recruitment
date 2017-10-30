import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Home from './components/home/home';
import Header from './components/header/header';
import SearchField from './components/search-field/search-field';

import Applicant from './components/applicant/applicant';
import Applicants from './applicants.json';


class App extends React.Component {

  state = {
    applicants: Applicants,
  }

  render() {
    return(
      <Router>
        <div>
          <Header />
          <SearchField />
          <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/applicants/:id" render={({ match }) => (
                <Applicant applicant={this.state.applicants.find(a => a.id === match.params.id)} />
              )}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

export default App;
