import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignupContainer from './../containers/SignupContainer';
import LoginContainer from './../containers/LoginContainer';
import HomeContainer from './../containers/HomeContainer';
import DashboardContainer from './../containers/DashboardContainer';
import UserContainer from './../containers/UserContainer';

export default function Routes() {
  return (
    <Router>
      <div className="webapp">
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/app" component={HomeContainer}>
          <Route path="dashboard" component={DashboardContainer} />
          <Route path="users" component={UserContainer} />
          <Route path="project" component={UserContainer} />
        </Route>
      </div>
    </Router>
  );
}
