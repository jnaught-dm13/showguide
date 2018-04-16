import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./ducks/userReducer";
import favoriteReducer from "./ducks/favoriteReducer";
import searchReducer from "./ducks/searchReducer";

const store = createStore(
  combineReducers({
    userReducer,
    favoriteReducer,
    searchReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
