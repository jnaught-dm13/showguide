import axios from "axios";

const GET_FAVORITE = "GET_FAVORITE";
const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export function addToFavorite(id, name, image, genre, network) {
  console.log(id, name, image, genre, network);
  return {
    type: ADD_TO_FAVORITE,
    payload: axios.post(`/api/favorite`, { id, name, image, genre, network })
  };
}

export function getFavorite() {
  return {
    type: GET_FAVORITE,
    payload: axios.get("/api/favorite")
  };
}
export function removeFavorite(id) {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: axios.delete(`/api/favorite/${id}`)
  };
}

const initialState = {
  favorite: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_FAVORITE}_FULFILLED`:
      return {
        ...state,
        favorite: action.payload.data
      };
    case `${ADD_TO_FAVORITE}_FULFILLED`:
      return {
        ...state,
        favorite: action.payload.data
      };
    case `${REMOVE_FROM_FAVORITE}_FULFILLED`:
      return {
        ...state,
        favorite: action.payload.data
      };
    default:
      return state;
  }
}
