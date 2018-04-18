import _ from "lodash";

export function fetchPosts() {
    const posts =  [
        {id : _.uniqueId("post"), authorId : "bkenobi", title : "How to Train Your Krayt Dragon"},
        {id : _.uniqueId("post"), authorId : "lskywalker", title : "101 Ways to Skin a Taun-Taun"},
        {id : _.uniqueId("post"), authorId : "bkenobi", title : "Do Force Ghosts Exist?"},
    ];

    return Promise.resolve(posts);
}

export function fetchAuthors() {
    const authors = [
        {authorId : "bkenobi", name : "Obi-Wan Kenobi"},
        {authorId : "lskywalker", name : "Luke Skywalker"}
    ];

    return Promise.resolve(authors);
}