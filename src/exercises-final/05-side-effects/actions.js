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
        dispatch(increment());
        dispatch(increment());
        dispatch(increment());
    }
}

export function dispatchIncrementIfEven() {
    return (dispatch, getState) => {
        const {counter} = getState();

        if(counter % 2 === 0) {
            dispatch(increment());
        }
    }
}


export function fetchAndLoadAmount() {
    return (dispatch) => {

        fetchAmount()
            .then(
                amount => dispatch(amountRequestSucceeded(amount)),
                error => dispatch(amountRequestFailed(error))
            )
    }
}