import React, { Component } from "react";
import "./Favorite.css";
import { getFavorite, removeFavorite } from "../../ducks/favoriteReducer";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Favorite extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getFavorite();
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
                <button
                  onClick={() =>
                    this.props.removeFavorite(this.props.user.id, e.show_id)
                  }
                >
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
  ...state.favoriteReducer
});

export default connect(mapStateToProps, { getFavorite, removeFavorite })(
  Favorite
);
