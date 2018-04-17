import React from "react";
import { connect } from "react-redux";
import { addToFavorite } from "../../ducks/favoriteReducer";
import { getUser } from "../../ducks/userReducer";
import "./Results.css";
import placeholder from "../images/poster-placeholder.jpg";
import ResultsExpanded from "./ResultsExpanded/ResultsExpanded";

function Results(props) {
  console.log("results", props);
  return (
    <div className="result-main">
      <div className="result-list">
        <div>
          {props.results[0] ? (
            props.results.map((e, i) => (
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
                {/* <div>Premiered on: {e.show.premiered}</div>
                <h3>Genres: {e.show.genres}</h3>
                <p>
                  Find this show on:
                  {e.show.network && e.show.network.name
                    ? e.show.network.name
                    : "No Streaming Media Services Found!"}
                </p>

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
                </button> */}
                {console.log(props.results)}
              </div>
            ))
          ) : (
            <div>Search Shows</div>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  ...state.userReducer
});

export default connect(mapStateToProps, { addToFavorite, getUser })(Results);
