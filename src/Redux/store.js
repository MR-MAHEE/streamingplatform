import {legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer } from './Reducer';

const middleware=[thunk]

const store = createStore(reducer,applyMiddleware(...middleware))
 
export default store;