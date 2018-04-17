

const ignoreAddIfOddMiddleware = storeAPI => next => action => {
    // WORKSHOP_START
    // TODO This middleware should look for "ADD_5" actions, and when it sees one, check
    // TODO the current state.  If `state.counter` is odd, the middleware should ignore
    // TODO the action entirely, and prevent it from going onwards.

    // Remember that `storeAPI` has the `getState` method available.

    return next(action);
    // WORKSHOP_END

    // FINAL_START
    if(action.type === "ADD_5") {
        const {counter} = storeAPI.getState();

        if(counter % 2 === 1) {
            return action;
        }
    }

    return next(action);
    // FINAL_END
}

export default ignoreAddIfOddMiddleware;