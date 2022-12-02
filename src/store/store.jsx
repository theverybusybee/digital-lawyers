import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import votingReducer  from "./reducers/voting-reducer.js";
import userDataReducer from "./reducers/user-data-reducer.js";

const reduсers = combineReducers({
  votingReducer: votingReducer,
  userDataReducer: userDataReducer,
});

const state = {};
export const store = configureStore({
  reducer: reduсers,
  middleware: (thunkmiddleware) =>
    thunkmiddleware({ serializableCheck: false }),
  state,
  devTools: true,
});
