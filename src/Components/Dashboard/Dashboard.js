import React, { Component } from "react";
import Search from "../Search/Search";
import "./Dashboard.css";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-top">
            <p>
              {" "}
              User logged in:{" "}
              {this.props.userReducer.user.name || "Not Logged In"}
            </p>
          </div>
        </div>
        <div className="dashboard-search">
          <Search />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUser })(Dashboard);
