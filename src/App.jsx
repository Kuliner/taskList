// @flow
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <p>Hi</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
