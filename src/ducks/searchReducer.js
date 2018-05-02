import axios from "axios";

const SEARCH_RESULT = "SEARCH_RESULT";
const INITIAL_SEARCH_RESULT = "INITIAL_SEARCH_RESULT";
const SEARCH_EPISODE = "SEARCH_EPISODE";

export function search(query) {
  return {
    type: SEARCH_RESULT,
    payload: axios.get(`http://api.tvmaze.com/search/shows/?q=${query}`)
  };
}
export function searchEpisodes(id) {
  return {
    type: SEARCH_EPISODE,
    payload: axios.get(
      ` http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=seasons`
    )
  };
}
export function initialSearch(query) {
  return {
    type: INITIAL_SEARCH_RESULT,
    payload: axios.get(`http://api.tvmaze.com/shows`)
  };
}
const initialState = {
  searchResult: [],
  initialSearch: [],
  episodes: [],
  seasons: []
};

export default function searchReducer(state = initialState, action) {
  // console.log(action.type);
  switch (action.type) {
    case `${SEARCH_RESULT}_FULFILLED`:
      return {
        ...state,
        searchResult: action.payload.data
      };
    case `${INITIAL_SEARCH_RESULT}_FULFILLED`:
      return {
        ...state,
        initialSearch: action.payload.data
      };
    case `${SEARCH_EPISODE}_FULFILLED`:
      // console.log(action.payload.data._embedded);
      return {
        ...state,
        episodes: action.payload.data._embedded.episodes,
        seasons: action.payload.data._embedded.seasons
      };

    default:
      return state;
  }
}
