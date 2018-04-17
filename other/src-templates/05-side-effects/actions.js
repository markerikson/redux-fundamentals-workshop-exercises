import {fetchAmount} from "./api";

export function increment() {
    return {type : "INCREMENT"};
}

export function amountRequestSucceeded(amount) {
    return {type : "AMOUNT_REQUEST_SUCCEEDED", amount};
}

export function amountRequestFailed(error) {
    return {type : "AMOUNT_REQUEST_FAILED", error};
}


export function incrementThreeTimes() {
    return (dispatch) => {
        // WORKSHOP_START
        // TODO This thunk needs to dispatch `"INCREMENT"` three times in a row
        // WORKSHOP_END
        // FINAL_START
        dispatch(increment());
        dispatch(increment());
        dispatch(increment());
        // FINAL_END
    }
}

export function dispatchIncrementIfEven() {
    return (dispatch, getState) => {
        // WORKSHOP_START
        // TODO This thunk needs to dispatch `"INCREMENT"`, but only if `state.counter` is even
        // WORKSHOP_END
        // FINAL_START
        const {counter} = getState();

        if(counter % 2 === 0) {
            dispatch(increment());
        }
        // FINAL_END
    }
}


export function fetchAndLoadAmount() {
    return (dispatch) => {
        // WORKSHOP_START
        // TODO This thunk needs to call the `fetchAmount()` API function imported above, and handle
        // TODO the promise it returns.  If the promise succeeds, the thunk should dispatch `requestAmountSucceeded()`
        // TODO with the returned amount.  If it fails, dispatch `requestAmountFailed()` instead with the error.
        // WORKSHOP_END

        // FINAL_START
        fetchAmount()
            .then(
                amount => dispatch(amountRequestSucceeded(amount)),
                error => dispatch(amountRequestFailed(error))
            )
        // FINAL_END
    }
}