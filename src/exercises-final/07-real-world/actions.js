import _ from "lodash";
import {fetchAuthors, fetchPosts} from "./api";

export function increment() {
    return {
        type : "INCREMENT"
    };
}

export function addNewPost(authorId, title) {
    const id = _.uniqueId("post");

    return {
        type : "ADD_NEW_POST",
        id,
        authorId,
        title,
    };
}

export function deletePost(postId) {
    return {
        type : "DELETE_POST",
        postId
    }
}

export function setPostAuthorFilter(authorId) {
    return {
        type : "VIEW_POSTS_BY_AUTHOR",
        authorId,
    }
}

export function clearPostAuthorFilter() {
    return {
        type : "CLEAR_POSTS_FILTER"
    };
}

export function requestPostsSuccess(posts) {
    return {
        type : "REQUEST_POSTS_SUCCESS",
        posts
    };
}

export function requestAuthorsSuccess(authors) {
    return {
        type : "REQUEST_AUTHORS_SUCCESS",
        authors
    };
}

// FINAL_START
export function loadInitialData() {
    return async (dispatch) => {
        const posts = await fetchPosts();
        dispatch(requestPostsSuccess(posts));

        const authors = await fetchAuthors();
        dispatch(requestAuthorsSuccess(authors));
    }
}
// FINAL_END