// @flow
import React from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';

import Login from './components/Login';
import Config from './Config';

dotenv.config({ path: `/path/to/.env.${process.env.NODE_ENV}` });
firebase.initializeApp(Config.firebaseConfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
