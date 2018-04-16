import React from "react";
import "./Results.css";
import placeholder from "../images/poster-placeholder.jpg";

export default function Results(props) {
  return (
    <div className="result-main">
      <div>Results Display = functional component- rendered in Search</div>
      <div className="result-list">
        <div>
          {props.results[0] ? (
            props.results.map((e, i) => (
              <div className="list" key={i}>
                <div className="list-img">
                  <img
                    src={
                      e.show.image && e.show.image.original
                        ? e.show.image.original
                        : placeholder
                    }
                    alt=""
                  />
                </div>
                <h1>Show: {e.show.name}</h1>
                <div>Premiered on: {e.show.premiered}</div>
                <h3>Genres: {e.show.genres}</h3>
                <p>
                  Find this show on:
                  {e.show.network && e.show.network.name
                    ? e.show.network.name
                    : "No Streaming Media Services Found!"}
                </p>
                <button>Add To WatchList</button>
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
