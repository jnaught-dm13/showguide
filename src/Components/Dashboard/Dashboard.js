import React, { Component } from "react";
import Search from "../Search/Search";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Dashboard Component</p>
        <div>
          <Search />
          {/* <Results /> */}
        </div>
      </div>
    );
  }
}
