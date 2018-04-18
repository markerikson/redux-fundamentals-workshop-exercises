import {combineReducers} from "redux";

export function postsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_NEW_POST" : {
            const {authorId, title, id} = action;
            return state.concat({id, authorId, title, comments : []});
        }
        case "DELETE_POST" : {
            return state.filter(post => post.id !== action.postId);
        }
        default : return state;
    }
}

export function authorsReducer(state = [], action) {
    switch(action.type) {
        default: return state;
    }
}

export function postsAuthorFilterReducer(state = null, action) {
    switch(action.type) {
        case "VIEW_POSTS_BY_AUTHOR" : return action.authorId;
        case "CLEAR_POSTS_FILTER" : return null;
        default : return state;
    }
}

export default combineReducers({
    posts : postsReducer,
    authors : authorsReducer,
    postsAuthorFilter : postsAuthorFilterReducer,
});

