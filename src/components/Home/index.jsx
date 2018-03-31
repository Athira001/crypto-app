import React, { Component } from 'react';
import Sidebar from './../Sidebar';
import Header from './../Header';
import User from './../User';
import './index.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Header />
        <div className="home__body">
          <Sidebar /> 
          <User />
        </div>
      </div>
    );
  }
}

export default Home;
