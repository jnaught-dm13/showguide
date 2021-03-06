import React, { Component } from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";
import "./Dashboard.css";
import loginbtn from "../images/loginbtn.png";
import { connect } from "react-redux";
import { getUser } from "../../ducks/userReducer";
import { initialSearch, search } from "../../ducks/searchReducer";
import { addToFavorite } from "../../ducks/favoriteReducer";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.initialSearch();
  }

  render() {
    // console.log(this.props);
    return (
      <div className="dashboard-main">
        <div className="dashboard-container">
          {/* <div>
            {this.props.userReducer.user.name || (
              <a href={process.env.REACT_APP_LOGIN}> LOGIN </a>
            )}
          </div> */}
        </div>
        <div className="dashboard-search">
          {this.props.userReducer.user.name ? <Search /> : ""}
        </div>
        <div>
          {this.props.userReducer.user.name ? (
            " "
          ) : (
            <div className="home-login ">
              <p style={{ color: "black" }}>
                STREAM GUIDE <br />Your Show and Episode Guide!
              </p>
              <div className="login-container">
                <a href={process.env.REACT_APP_LOGIN}>
                  {" "}
                  <img src={loginbtn} alt="" />
                </a>
              </div>
            </div>
          )}
        </div>
        <div>
          {!this.props.userReducer.user.name ? (
            ""
          ) : (
            <div id="initial-search">
              {this.props.searchReducer.initialSearch.map((e, i) => (
                <div key={i} className="test">
                  <img
                    src={e.image.medium}
                    alt=""
                    onClick={() => this.props.search(e.name)}
                  />

                  <div className="title">
                    {" "}
                    <p>
                      {" "}
                      {e.name} <br />
                      watch on:{" "}
                      {(e.network && e.network.name) ||
                        (e.webChannel && e.webChannel.name)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  getUser,
  initialSearch,
  addToFavorite,
  search
})(Dashboard);
