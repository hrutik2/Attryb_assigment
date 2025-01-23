import { applyMiddleware, createStore, legacy_createStore } from "redux";
import { Reducer } from "./reducer";
import { thunk } from "redux-thunk";
export const Store=legacy_createStore(Reducer,applyMiddleware(thunk))