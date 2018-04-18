import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"


import rootReducer from "./rootReducer";

export default function configureStore(preloadedState) {
    const middlewares = [thunk];

    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];

    // WORKSHOP_START
    // TODO Use composeWithDevtools instead to enable the Redux DevTools extension
    const composedEnhancer = compose(...enhancers);
    // WORKSHOP_END
    // FINAL_START
    const composedEnhancer = composeWithDevTools(...enhancers);
    // FINAL_END


    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    // WORKSHOP_START
    // TODO Set up HMR for the root reducer
    // WORKSHOP_END
    // FINAL_START
    if(module.hot) {
        module.hot.accept("./rootReducer", () =>{
            const newRootReducer = require("./rootReducer").default;
            store.replaceReducer(newRootReducer)
        });
    }
    // FINAL_END

    return store;
}