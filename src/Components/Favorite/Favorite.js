import React, { Component } from "react";
import "./Favorite.css";
import Slider from "react-slick";
import FavoriteExpanded from "../FavoriteExpanded/FavoriteExpanded";
import {
  getFavorite,
  removeFavorite,
  getWatched,
  getCount
} from "../../ducks/favoriteReducer";
import { searchEpisodes } from "../../ducks/searchReducer";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_image: "",
      show_id: 0
    };
  }
  componentDidMount() {
    this.props.getFavorite();
    this.props.getUser();
  }
  render() {
    // console.log(this.state.show_image);
    // console.log(this.props);
    return (
      <div className="favorite-main">
        <div className="favorites">
          {this.props.favorite[0]
            ? this.props.favorite.map((e, i) => (
                <div className="fav-list" key={i}>
                  <div className="fav-images">
                    {" "}
                    <img src={e.image} alt="" />
                  </div>
                  <p> Title: {e.name}</p>
                  <p> Watch On: {e.network}</p>
                  <button
                    onClick={event => {
                      this.setState({
                        show_image: e.image,
                        show_id: e.show_id
                      });
                      this.props
                        .searchEpisodes(e.show_id)
                        .then(res => this.props.getWatched(e.show_id))
                        .then(response => this.props.getCount(e.show_id));
                    }}
                  >
                    more info
                  </button>
                  <button
                    onClick={() =>
                      this.props
                        .removeFavorite(e.show_id)
                        .then(this.setState({ show_id: 0 }))
                    }
                  >
                    Remove
                  </button>
                </div>
              ))
            : "NOTHING TO DISPLAY"}
        </div>
        {(this.state.show_id > 0) | (this.state.show_id > 0) ? (
          <div className="fav-expanded">
            <FavoriteExpanded
              image={this.state.show_image}
              show_id={this.state.show_id}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.favoriteReducer,
  ...state.searchReducer
});

export default connect(mapStateToProps, {
  getFavorite,
  removeFavorite,
  getUser,
  searchEpisodes,
  getWatched,
  getCount
})(Favorite);
