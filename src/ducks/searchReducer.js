import axios from "axios";

const SEARCH_RESULT = "SEARCH_RESULT";
const INITIAL_SEARCH_RESULT = "INITIAL_SEARCH_RESULT";
const CLEAR_SEARCH_RESULT = "CLEAR_SEARCH_RESULT";

export function clearSearch(clear) {
  return {
    type: CLEAR_SEARCH_RESULT,
    payload: clear
  };
}
export function search(query) {
  return {
    type: SEARCH_RESULT,
    payload: axios.get(
      `http://api.tvmaze.com/search/shows/?q=${query}&embed=episodes`
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
  initialSearch: []
};

export default function searchReducer(state = initialState, action) {
  console.log(action.type);
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
    case `${CLEAR_SEARCH_RESULT}_FULFILLED`:
      return {
        ...state,
        searchResult: []
      };
    default:
      return state;
  }
}
