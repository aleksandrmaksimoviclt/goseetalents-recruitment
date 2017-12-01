import React  from 'react';
import './home.css';
import '../../fonts/font-awesome/css/font-awesome.css';
import List from './../../components/list/list';

const Home = (props) => (
  <div className="App">
    <div>Items</div>
    <List
      applicants={props.applicants}
    />
  </div>
);

export default Home;
