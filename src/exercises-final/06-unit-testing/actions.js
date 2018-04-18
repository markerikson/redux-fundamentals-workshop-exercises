import _ from "lodash";

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