

const ignoreAddIfOddMiddleware = storeAPI => next => action => {

    if(action.type === "ADD_5") {
        const {counter} = storeAPI.getState();

        if(counter % 2 === 1) {
            return action;
        }
    }

    return next(action);
}

export default ignoreAddIfOddMiddleware;