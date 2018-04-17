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
            <div>
              {this.props.userReducer.user.name || (
                <a href="http://localhost:3001/login"> LOGIN </a>
              )}
            </div>
          </div>
        </div>
        <div className="dashboard-search">
          {!this.props.userReducer.user.name || <Search />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUser })(Dashboard);
