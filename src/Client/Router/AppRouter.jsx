import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';

const AppRouter = () => (
  <>
    <Route exact path="/">
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </>
);

export default AppRouter;
