import React, { Component } from 'react';
import Axios from 'axios';
import './home.css';
import '../../fonts/font-awesome/css/font-awesome.css';

// import Applicants from '../../applicants.json';



import List from './../../components/list/list';
// import SearchField from './../../components/search-field/search-field';
//
// const API_URL = 'http://192.168.43.152:8080';
// const APPLICANT_URL = `${API_URL}/applicants/`;

class Home extends Component {

  // state = {
  //   applicants: Applicants,
  // }

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

  render() {
    return (
      <div className="App">
        {/* <SearchField /> */}
        <List
          applicants={this.state.applicants}
        />
      </div>
    );
  }
}

export default Home;
