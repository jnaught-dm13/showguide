import axios from "axios";

const SEARCH_RESULT = "SEARCH_RESULT";

export function search(query) {
  return {
    type: SEARCH_RESULT,
    payload: axios.get(
      `http://api.tvmaze.com/search/shows/?q=${query}&embed=episodes`
    )
  };
}
const initialState = {
  searchResult: []
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case `${SEARCH_RESULT}_FULFILLED`:
      return {
        ...state,
        searchResult: action.payload.data
      };

    default:
      return state;
  }
}
