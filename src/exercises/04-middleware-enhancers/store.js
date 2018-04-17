import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./rootReducer";

import ignoreAddIfOddMiddleware from "./ignoreAddIfOddMiddleware";
import dispatchMultipleActionsMiddleware from "./dispatchMultipleActionsMiddleware";
import countIncrementsSeenMiddleware from "./countIncrementsSeenMiddleware";

import counterEvenOddEnhancer from "./counterEvenOddEnhancer";

const middlewares = [
    ignoreAddIfOddMiddleware,
    dispatchMultipleActionsMiddleware,
    countIncrementsSeenMiddleware,
];
const middlewareEnhancer = applyMiddleware(...middlewares);

const composedEnhancers = compose(
    middlewareEnhancer,
    counterEvenOddEnhancer,
)

const store = createStore(rootReducer, composedEnhancers);

export default store;