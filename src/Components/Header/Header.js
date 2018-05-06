import React from "react";
import "./Header.css";
import Checkout from "../../Checkout";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  console.log("header", props);

  return (
    <header className="header-container">
      <div className="header-title">
        <h1 className="slidein" style={{ color: "rgba(73, 73, 73)" }}>
          {" "}
          Stream Guide
        </h1>
      </div>

      <div className="nav-list ">
        {!props.props.userReducer.user.name |
        props.props.userReducer.user.name ? (
          " "
        ) : (
          <div className="nav-list ">
            <Link className="header-links" to="/">
              <p className="header-links">SEARCH</p>
            </Link>
            <Link className="header-links" to="/favorite">
              <p>MY LIST {props.favorite.length || 0}</p>
            </Link>
            <p>
              <Checkout
                name={"MOAR BEER PLEEZ"}
                description={"FREE BEER"}
                amount={1}
              />
            </p>
            <div className="profile-pic">
              <img src={props.props.userReducer.user.picture} alt="" />
            </div>
            <a href={process.env.REACT_APP_LOGOUT} className="logout">
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
const mapStateToProps = state => ({ ...state.favoriteReducer });

export default connect(mapStateToProps)(Header);
