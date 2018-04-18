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
        case "REQUEST_POSTS_SUCCESS": {
            return action.posts;
        }
        default : return state;
    }
}

export function authorsReducer(state = [], action) {
    switch(action.type) {
        case "REQUEST_AUTHORS_SUCCESS" : {
            return action.authors;
        }
        default: return state;
    }
}

export function postsAuthorFilterReducer(state = null, action) {
    switch(action.type) {
        case "VIEW_POSTS_BY_AUTHOR" : return action.authorID;
        case "CLEAR_POSTS_FILTER" : return null;
        default : return state;
    }
}

export function counter(state = 0, action) {
    switch(action.type) {
        case "INCREMENT" : return state + 1;
        default : return state;
    }
}

export default combineReducers({
    posts : postsReducer,
    authors : authorsReducer,
    postsAuthorFilter : postsAuthorFilterReducer,
    counter,
});

