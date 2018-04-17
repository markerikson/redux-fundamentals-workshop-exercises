import {combineReducers} from "redux";

function postsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_NEW_POST" : {
            const {authorId, title, id} = action;
            return state.concat({id, authorId, title, comments : []});
        }
        default : return state;
    }
}

function authorsReducer(state = [], action) {
    switch(action.type) {
        default: return state;
    }
}

export default combineReducers({
    posts : postsReducer,
    authors : authorsReducer,
});

