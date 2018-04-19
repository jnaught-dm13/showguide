import React, { Component } from "react";
import "./Authentication.css";
import connect from "react-redux";
import initialSearch from "../../ducks/searchReducer";

class Authentication extends Component {
  componentDidMount() {
    this.props.initialSearch();
  }
  render() {
    console.log(props.initialSearch);
    return (
      <div className="authentication-main">
        <div>
          <a href="http://localhost:3001/login"> LOGIN</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { initialSearch })(Authentication);
