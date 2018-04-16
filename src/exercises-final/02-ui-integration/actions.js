import _ from "lodash";

export function addNewPost(username, title) {
    const id = _.uniqueId("post");

    return {
        type : "ADD_NEW_POST",
        id,
        username,
        title,
    };
}