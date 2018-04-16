import React, { Component } from "react";
import Search from "../Search/Search";
import "./Dashboard.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-main">
        <p>Dashboard Component</p>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}
