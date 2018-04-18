import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"


import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];

    // TODO Use composeWithDevtools instead to enable the Redux DevTools extension
    const composedEnhancer = compose(...enhancers);


    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    // TODO Set up HMR for the root reducer

    return store;
}