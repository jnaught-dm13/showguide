import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";

// ---------------Component Imports -------------//
// import Authentication from "./Components/Authentication/Authentication";

export default (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);
