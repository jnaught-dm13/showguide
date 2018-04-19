import React from "react";
import { Switch, Route } from "react-router-dom";

// ---------------Component Imports -------------//
import Favorite from "./Components/Favorite/Favorite";
import Dashboard from "./Components/Dashboard/Dashboard";
import ResultsExpanded from "./Components/Results/ResultsExpanded/ResultsExpanded";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/favorite" component={Favorite} />
    <Route path="/expanded" component={ResultsExpanded} />
  </Switch>
);
