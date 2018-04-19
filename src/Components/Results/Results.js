import React from "react";
import { connect } from "react-redux";
import { addToFavorite } from "../../ducks/favoriteReducer";
import { getUser } from "../../ducks/userReducer";
import "./Results.css";
import placeholder from "../images/poster-placeholder.jpg";
// import ResultsExpanded from "./ResultsExpanded/ResultsExpanded";

function Results(props) {
  console.log("results", props);
  return (
    <div className="result-main">
      {/* <ResultsExpanded props={props} /> */}

      <div className="result-list">
        <div className="wrapper">
          {props.results.map((e, i) => (
            <div className="list" key={i}>
              <div className="list-img">
                <img
                  src={
                    e.show.image && e.show.image.medium
                      ? e.show.image.medium
                      : placeholder
                  }
                  alt=""
                />

                <p className="results-title">{e.show.name}</p>
              </div>
              <div>
                <button
                  onClick={() =>
                    props.addToFavorite(
                      e.show.id,
                      e.show.name,
                      e.show.image.original,
                      e.show.genres[0],
                      e.show.network.name,
                      props.user.id
                    )
                  }
                >
                  Add To WatchList
                </button>
              </div>
              <div className="info">
                <div>Premiered on: {e.show.premiered}</div>
                <p>Genres: {e.show.genres}</p>
                <p>
                  Find this show on:
                  {e.show.network && e.show.network.name
                    ? e.show.network.name
                    : "No Streaming Media Services Found!"}
                </p>
                {e.show.summary}
              </div>
            </div>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps, { addToFavorite, getUser })(Results);
