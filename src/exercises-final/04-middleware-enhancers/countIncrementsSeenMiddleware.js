

const countIncrementsSeenMiddleware = storeAPI => {
    let incrementsSeen = 0;

    return next => action => {
        const result = next(action);

        if(action.type === "INCREMENT") {
            incrementsSeen++;
            next({type : "INCREMENTS_SEEN", count : incrementsSeen});
        }

        return result;
    }
}


export default countIncrementsSeenMiddleware;