import React, { Component } from "react";
import { connect } from "react-redux";
import { initialSearch } from "../../ducks/searchReducer";
import { addToFavorite } from "../../ducks/favoriteReducer";
import placeholder from "../images/poster-placeholder.jpg";
import "./ResultsTest.css";
class ResultsTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.searchReducer.initialSearch !==
      nextProps.searchReducer.initialSearch
    ) {
      this.setState({ index: 0 });
    }
  }
  goToNext = () => {
    if (
      this.state.index !==
      this.props.searchReducer.initialSearch.length - 1
    ) {
      this.setState({ index: this.state.index + 1 });
    } else {
      alert("No more results");
    }
  };
  goToPrevious = () => {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      alert("No more results");
    }
  };

  render() {
    const result = this.props.searchReducer.initialSearch[this.state.index];
    // console.log("result", result);
    return (
      <div>
        {result ? (
          <div className="results-main">
            <div className="results-container">
              <div className="image-container">
                <img
                  src={
                    result.image && result.image.medium
                      ? result.image.medium
                      : placeholder
                  }
                  alt=""
                />
                <div className="align-button">
                  <button className="buttons" onClick={this.goToPrevious}>
                    Previous
                  </button>
                  <button className="buttons" onClick={this.goToNext}>
                    Next
                  </button>
                </div>
              </div>
              <div className="moreinfo">
                <h1 className="results-title">{result.name}</h1>

                <div className="info">
                  <div>Premiered on: {result.premiered}</div>
                  <p>Genres: {result.genres}</p>

                  {result.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                  <p>
                    Watch on:{" "}
                    {result.webChannel && result.webChannel.name
                      ? result.webChannel.name
                      : result.network && result.network.name
                        ? result.network.name
                        : " No Streaming Data Found!"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { initialSearch, addToFavorite })(
  ResultsTest
);
