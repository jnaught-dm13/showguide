import axios from "axios";

const GET_FAVORITE = "GET_FAVORITE";
const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
const UPDATE_WATCH = "UPDATE_WATCH";
const GET_WATCHED = "GET_WATCHED";
const REMOVE_WATCH = "REMOVE_WATCH";
const GET_COUNT = "GET_COUNT";

export function addToFavorite(id, name, image, genre, network) {
  // console.log(id, name, image, genre, network);
  return {
    type: ADD_TO_FAVORITE,
    payload: axios.post(`/api/favorite`, { id, name, image, genre, network })
  };
}

export function updateWatch(show, id, season) {
  return {
    type: UPDATE_WATCH,
    payload: axios.put(`/api/favorite`, { show, id, season })
  };
}
export function removeWatch(ep_id, show_id) {
  return {
    type: REMOVE_WATCH,
    payload: axios.delete(`/api/favorite/${ep_id}/${show_id}`)
  };
}
export function getWatched(show) {
  return {
    type: GET_WATCHED,
    payload: axios.get(`/api/favorite/${show}`)
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
export function getCount(show_id) {
  console.log(show_id);
  return {
    type: GET_COUNT,
    payload: axios.get(`/api/count/${show_id}`)
  };
}

const initialState = {
  favorite: {},
  episodeId: [],
  getWatched: [],
  count: 0
};

export default function userReducer(state = initialState, action) {
  // console.log(action);
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
    case `${UPDATE_WATCH}_FULFILLED`:
      return {
        ...state,
        getWatched: action.payload.data
      };
    case `${GET_WATCHED}_FULFILLED`:
      return {
        ...state,
        getWatched: action.payload.data
      };
    case `${REMOVE_WATCH}_FULFILLED`:
      return {
        ...state,
        getWatched: action.payload.data
      };
    case `${GET_COUNT}_FULFILLED`:
      return {
        ...state,
        count: Number(action.payload.data)
      };
    default:
      return state;
  }
}
