import {combineReducers} from "redux";

function postsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_NEW_POST" : {
            const {username, title, id} = action;
            return state.concat({id, username, title, comments : []});
        }
        default : return state;
    }
}

function usersReducer(state = [], action) {
    switch(action.type) {
        default: return state;
    }
}

export default combineReducers({
    posts : postsReducer,
    users : usersReducer,
});

