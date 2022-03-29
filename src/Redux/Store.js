import {applyMiddleware, createStore} from "redux";
import Thunk from "redux-thunk";
import Reducer from "./Reducer/CallApi";

export const Store = createStore(reducer,{},applyMiddleware(Thunk))