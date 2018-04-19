import React, { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../ducks/searchReducer";
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
      this.props.searchReducer.searchResult !==
      nextProps.searchReducer.searchResult
    ) {
      this.setState({ index: 0 });
    }
  }
  goToNext = () => {
    if (this.state.index !== this.props.searchReducer.searchResult.length - 1) {
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
    const item = this.props.searchReducer.searchResult[this.state.index];

    return (
      <div>
        {item ? (
          <div className="results-main">
            <div className="results-container">
              <div className="image-container">
                <img
                  src={
                    item.show.image && item.show.image.medium
                      ? item.show.image.medium
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
                <h1 className="results-title">{item.show.name}</h1>

                <div className="info">
                  <div>Premiered on: {item.show.premiered}</div>
                  <p>Genres: {item.show.genres}</p>

                  {item.show.summary}
                  <p>
                    Watch on:{" "}
                    {item.show.webChannel && item.show.webChannel.name
                      ? item.show.webChannel.name
                      : item.show.network && item.show.network.name
                        ? item.show.network.name
                        : " No Streaming Data Found!"}
                  </p>
                </div>
              </div>

              <div className="fav-button">
                <button
                  className="buttons"
                  onClick={() =>
                    this.props.addToFavorite(
                      item.show.id,
                      item.show.name,
                      item.show.image.original,
                      item.show.genres[0],
                      !item.show.network
                        ? item.show.webChannel.name
                        : item.show.network.name,
                      this.props.userReducer.user.id
                    )
                  }
                >
                  Add To WatchList
                </button>
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
export default connect(mapStateToProps, { search, addToFavorite })(ResultsTest);
