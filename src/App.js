import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        {routes}
      </div>
    );
  }
}

export default App;
