import React, { Component } from "react";
import { connect } from "react-redux";
import Results from "../Results/Results";
import Test from "../Results/ResultsTest";
import "./Search.css";
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
      <div className="search-main">
        <input
          type="text"
          placeholder="Search Shows"
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.props.search(this.state.searchInput);
            }
          }}
          onChange={e => this.setState({ searchInput: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.search(this.state.searchInput);
          }}
        >
          search
        </button>
        {this.props.result.length === 0 ? <Results /> : <Test />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    result: state.searchReducer.searchResult
  };
};

export default connect(mapStateToProps, { search })(Search);
