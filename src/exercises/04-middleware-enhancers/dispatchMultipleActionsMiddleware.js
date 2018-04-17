

const dispatchMultipleActionsMiddleware = storeAPI => next => action => {
    // TODO This middleware should check to see if a given "action" is actually an array,
    // TODO using `Array.isArray()`.  If it's an array, it should assume that all of the
    // TODO items are real actions, and dispatch them back to the start of the middleware chain.
    // TODO In that case, the return value should be the number of actions in the array.

    // Remember that `storeAPI` has the `dispatch` method available.

    return next(action);

}

export default dispatchMultipleActionsMiddleware;