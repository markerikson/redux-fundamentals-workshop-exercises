import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";


const middlewares = [
    thunkMiddleware,
];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;