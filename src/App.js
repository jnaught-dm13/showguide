import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import Header from "./Components/Header/Header";
import SubMenu from "./Components/SubMenu/SubMenu";
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
        <SubMenu />

        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUser })(App);
