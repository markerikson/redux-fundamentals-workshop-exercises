import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    switch(action.type) {
        case "INCREMENT" : {
            return state + 1;
        }
        case "AMOUNT_REQUEST_SUCCEEDED" : {
            return state + action.amount;
        }
        default : return state;
    }
}

function lastCallSucceededReducer(state = "Unknown", action) {
    switch(action.type) {
        case "AMOUNT_REQUEST_SUCCEEDED" : return "Yes";
        case "AMOUNT_REQUEST_FAILED" : return `No (error: ${action.error})`;
        default : return state;
    }
}

export default combineReducers({
    counter : counterReducer,
    lastCallSucceeded : lastCallSucceededReducer
});