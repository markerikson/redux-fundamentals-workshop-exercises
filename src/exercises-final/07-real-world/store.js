import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"


import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...enhancers);


    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    if(module.hot) {
        module.hot.accept("./rootReducer", () =>{
            const newRootReducer = require("./rootReducer").default;
            store.replaceReducer(newRootReducer)
        });
    }

    return store;
}