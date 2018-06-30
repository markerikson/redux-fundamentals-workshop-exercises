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
            // TODO Replace this dummy assertion with a meaningful test for mapState
            expect(true).toBe(false);
        })

    });

    describe("PostsList component", () => {
        test("renders without crashing", () => {
            // TODO Replace this dummy assertion with a meaningful test for PostsList
            expect(true).toBe(false);
        })

        test("shows the right number of list items", () => {
            // TODO Replace this dummy assertion with a meaningful test for the contents of PostsList
            expect(true).toBe(false);
        });
    });
});