// @flow
import React from 'react';

import AppRouter from './Router/AppRouter';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4" />
        <div className="col-md-4">
          <AppRouter />
        </div>
        <div className="col-md-4" />
      </div>
      <div className="row">
        <div className="col-xs-12" />
      </div>
    </div>
  );
}

export default App;
