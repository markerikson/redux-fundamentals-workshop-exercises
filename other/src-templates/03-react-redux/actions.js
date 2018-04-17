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