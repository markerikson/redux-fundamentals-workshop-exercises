

const dispatchMultipleActionsMiddleware = storeAPI => next => action => {

    if(Array.isArray(action)) {
        action.forEach(storeAPI.dispatch);
        return action.length;
    }

    return next(action);
}

export default dispatchMultipleActionsMiddleware;