import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
