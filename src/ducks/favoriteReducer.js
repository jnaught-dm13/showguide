import axios from "axios";

const GET_FAVORITE = "GET_FAVORITE";

export function getFavorite() {
  return {
    type: GET_FAVORITE,
    payload: axios.get("/api/favorite")
  };
}

const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_FAVORITE}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
