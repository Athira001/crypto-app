import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignupContainer from './../containers/SignupContainer';
import LoginContainer from './../containers/LoginContainer';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
      </div>
    </Router>
  );
}
