import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import thunkmiddleware from "redux-thunk";
import votingReducer  from "./reducers/reducer.jsx";

const wsUrl = "wss://norma.nomoreparties.space/orders";

const reduсers = combineReducers({
  votingReducer: votingReducer,
});

const state = {};
export const store = configureStore({
  reducer: reduсers,
  middleware: (thunkmiddleware) =>
    thunkmiddleware({ serializableCheck: false }),
  state,
  devTools: true,
});
