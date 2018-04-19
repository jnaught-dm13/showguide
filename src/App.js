import React, { Component } from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import { getUser } from "./ducks/userReducer";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="App">
        <Header props={this.props} />

        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps, { getUser })(App));
