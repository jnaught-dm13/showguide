import React from "react";
import { Switch, Route } from "react-router-dom";

// ---------------Component Imports -------------//
import Favorite from "./Components/Favorite/Favorite";
import Dashboard from "./Components/Dashboard/Dashboard";
import Authentication from "./Components/Authentication/Authentication";
import ResultsExpanded from "./Components/Results/ResultsExpanded/ResultsExpanded";

export default (
  <Switch>
    <Route exact path="/" component={Authentication} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/expanded" component={ResultsExpanded} />
  </Switch>
);
