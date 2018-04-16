import React from "react";
// import ResultsExpanded from "./Components/Results/ResultsExpanded/ResultsExpanded";
import { Switch, Route } from "react-router-dom";
import Favorite from "./Components/Favorite/Favorite";
import Dashboard from "./Components/Dashboard/Dashboard";
import Authentication from "./Components/Authentication/Authentication";

// ---------------Component Imports -------------//
// import Authentication from "./Components/Authentication/Authentication";

export default (
  <Switch>
    <Route exact path="/" component={Authentication} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/favorite" component={Favorite} />
  </Switch>
);
