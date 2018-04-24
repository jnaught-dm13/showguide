import React, { Component } from "react";
import "./Favorite.css";
import FavoriteExpanded from "../FavoriteExpanded/FavoriteExpanded";
import { getFavorite, removeFavorite } from "../../ducks/favoriteReducer";
import { searchEpisodes } from "../../ducks/searchReducer";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Favorite extends Component {
  componentDidMount() {
    this.props.getFavorite();
    this.props.getUser();
  }
  render() {
    console.log(this.props);
    return (
      <div className="favorites">
        {this.props.favorite[0]
          ? this.props.favorite.map((e, i) => (
              <div className="fav-list" key={i}>
                <div className="fav-images">
                  {" "}
                  <img src={e.image} alt="" />
                </div>
                <p> Title: {e.name}</p>
                <p> Network: {e.network}</p>
                <FavoriteExpanded name={this.props} />
                <button onClick={() => this.props.searchEpisodes(e.show_id)}>
                  more info
                </button>
                <button onClick={() => this.props.removeFavorite(e.show_id)}>
                  Remove
                </button>
              </div>
            ))
          : "Add Shows To Your List"}
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
  searchEpisodes
})(Favorite);
