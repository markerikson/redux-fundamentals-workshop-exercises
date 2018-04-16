import _ from "lodash";
import {createStore} from "redux";
import rootReducer from "./rootReducer";

const initialState = {
    users : [
        {username : "bkenobi", name : "Obi-Wan Kenobi"},
        {username : "lskywalker", name : "Luke Skywalker"}
    ],
    posts : [
        {id : _.uniqueId("post"), username : "bkenobi", title : "How to Train Your Krayt Dragon"},
        {id : _.uniqueId("post"), username : "lskywalker", title : "101 Ways to Skin a Taun-Taun"},
        {id : _.uniqueId("post"), username : "bkenobi", title : "Do Force Ghosts Exist?"},
    ]
}

const store = createStore(rootReducer, initialState);

export default store;