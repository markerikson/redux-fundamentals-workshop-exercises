import {combineReducers} from "redux";

function counterReducer(state = 0, action) {
    switch(action.type) {
        case "INCREMENT" : {
            return state + 1;
        }
        case "ADD_5" : {
            return state + 5;
        }
        default : return state;
    }
}

function incrementsSeenReducer(state = 0, action) {
    switch(action.type) {
        case "INCREMENTS_SEEN" : {
            return state + 1;
        }
        default : return state;
    }
}

export default combineReducers({
    counter : counterReducer,
    incrementsSeen : incrementsSeenReducer,
});