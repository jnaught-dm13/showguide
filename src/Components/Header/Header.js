import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  console.log("favs", props);

  return (
    <header className="header-container">
      <div className="header-title">
        <h1> Stream Guide</h1>
      </div>
      <div className="nav-list">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/favorite">
          <div>My List {props.favorite.length || 0}</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/profile">
          <div>Profile</div>
        </Link>
      </div>
    </header>
  );
};
const mapStateToProps = state => ({ ...state.favoriteReducer });

export default connect(mapStateToProps)(Header);
