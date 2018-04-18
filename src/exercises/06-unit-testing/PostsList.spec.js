import React from "react";
import {mount, shallow} from "enzyme";
import {mapState, PostsList} from "./PostsList";

const state = {
    posts : [
        {id : 1, authorId : "bkenobi", title : "How to Train Your Krayt Dragon"},
        {id : 2, authorId : "lskywalker", title : "101 Ways to Skin a Taun-Taun"},
        {id : 3, authorId : "bkenobi", title : "Do Force Ghosts Exist?"},
    ],
    authors : [
        {authorId : "bkenobi", name : "Obi-Wan Kenobi"},
        {authorId : "lskywalker", name : "Luke Skywalker"}
    ],
    postsAuthorFilter : "bkenobi"
};

describe("PostsList", () => {
    describe("mapState", () => {

        test("filters the posts correctly", () => {
            expect(true).toBe(false);
        })

    });

    describe("PostsList component", () => {
        test("renders without crashing", () => {
            expect(true).toBe(false);
        })

        test("shows the right number of list items", () => {
            expect(true).toBe(false);
        });
    });
});