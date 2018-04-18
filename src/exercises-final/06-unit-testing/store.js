import _ from "lodash";
import {createStore} from "redux";
import rootReducer from "./rootReducer";

const initialState = {
    authors : [
        {authorId : "bkenobi", name : "Obi-Wan Kenobi"},
        {authorId : "lskywalker", name : "Luke Skywalker"}
    ],
    posts : [
        {id : _.uniqueId("post"), authorId : "bkenobi", title : "How to Train Your Krayt Dragon"},
        {id : _.uniqueId("post"), authorId : "lskywalker", title : "101 Ways to Skin a Taun-Taun"},
        {id : _.uniqueId("post"), authorId : "bkenobi", title : "Do Force Ghosts Exist?"},
    ]
}

const store = createStore(rootReducer, initialState);

export default store;