import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {routes}
      </div>
    );
  }
}

export default App;
