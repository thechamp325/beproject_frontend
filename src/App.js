import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/:location" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
