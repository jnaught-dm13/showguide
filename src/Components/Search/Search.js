import React, { Component } from "react";
import { connect } from "react-redux";
import Results from "../Results/Results";
import { search } from "../../ducks/searchReducer";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  render() {
    return (
      <div>
        <p>Search Component - I am inside the Dashboard Component</p>
        <input
          type="text"
          placeholder="Search Shows"
          onChange={e => this.setState({ searchInput: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.search(this.state.searchInput);
          }}
        >
          search
        </button>
        <Results results={this.props.searchResult} />
      </div>
    );
  }
}
const mapStateToProps = state => ({ ...state.searchReducer });

export default connect(mapStateToProps, { search })(Search);
