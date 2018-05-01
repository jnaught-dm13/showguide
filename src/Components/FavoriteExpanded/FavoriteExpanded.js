import React, { Component } from "react";
import { connect } from "react-redux";
import "./FavoriteExpanded.css";
import { getFavorite, updateWatch } from "../../ducks/favoriteReducer";

import placeholder from "../images/poster-placeholder.jpg";

import { searchEpisodes } from "../../ducks/searchReducer";

class ResultsExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: [],
      currentSeason: 1,
      seasons: []
    };
    this.seasonChange = this.seasonChange.bind(this);
  }
  componentDidMount() {
    this.props.getFavorite();
  }
  componentWillReceiveProps(nextProps) {
    if (
      this.props.searchReducer.episodes !== nextProps.searchReducer.episodes
    ) {
      this.setState({ episodes: nextProps.searchReducer.episodes });
    }
    if (this.props.searchReducer.seasons !== nextProps.searchReducer.seasons) {
      this.setState({ seasons: nextProps.searchReducer.seasons });
    }
  }

  seasonChange(value) {
    console.log(value);
    this.setState({ currentSeason: value });
  }
  render() {
    const show = this.props.show_id;
    const seasonCount = this.state.seasons.map((x, i) => x.number);
    // console.log(this.state.seasons.length);
    // console.log(this.props, show);
    console.log(seasonCount);
    console.log("seasons", this.state.seasons);
    return (
      <div className="expanded-start">
        {this.state.episodes[0] ? (
          <div className="main">
            <div className="list">
              <br />
              <img src={this.props.image} alt="" />
            </div>
            <div className="season-list">
              {
                <select onChange={e => this.seasonChange(e.target.value)}>
                  {this.state.seasons.map((e, i) => (
                    <option value={e.number} key={i}>
                      season {e.number}
                    </option>
                  ))}
                </select>
              }
            </div>
            <div className="expanded-main">
              <div className="expanded-title-image" />
              {this.state.episodes
                .filter(
                  (e, i) => e.season === parseInt(this.state.currentSeason)
                )
                .map((e, i) => (
                  <div className="expanded-list" key={i}>
                    <div className="image-list">
                      Episode {e.number}
                      <br />
                      {e.name}
                      <br />
                      <img
                        src={
                          e.image && e.image.medium
                            ? e.image.medium
                            : placeholder
                        }
                        alt=""
                      />
                      <br />
                      {e.airtime && e.airtime ? e.airtime : ""}
                    </div>
                    <div className="info-list">
                      <br />
                      <div>
                        {e.summary && e.summary.replace(/<\/?[^>]+(>|$)/g, "")
                          ? e.summary.replace(/<\/?[^>]+(>|$)/g, "")
                          : "No Description"}
                      </div>
                    </div>
                    <br />
                    <div className="watch-button">
                      {e.season === seasonCount &&
                      e.number < this.props.favoriteReducer.episodeWatch ? (
                        "Seen"
                      ) : (
                        <button
                          onClick={() =>
                            this.props.updateWatch(show, e.id, e.season)
                          }
                        >
                          Watched this episode
                        </button>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  searchEpisodes,
  getFavorite,
  updateWatch
})(ResultsExpanded);
