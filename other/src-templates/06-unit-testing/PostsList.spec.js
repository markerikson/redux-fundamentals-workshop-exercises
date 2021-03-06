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
            // WORKSHOP_START
            // TODO Replace this dummy assertion with a meaningful test for mapState
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const result = mapState(state);

            expect(result.posts.length).toBe(2);

            const onlyKenobis = result.posts.every(post => post.authorId === state.postsAuthorFilter);
            expect(onlyKenobis).toBe(true);
            // FINAL_END
        })

    });

    describe("PostsList component", () => {
        test("renders without crashing", () => {
            // WORKSHOP_START
            // TODO Replace this dummy assertion with a meaningful test for PostsList
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const $wrapper = shallow(
                <PostsList />
            );
            // FINAL_END
        })

        test("shows the right number of list items", () => {
            // WORKSHOP_START
            // TODO Replace this dummy assertion with a meaningful test for the contents of PostsList
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const $wrapper = shallow(
                <PostsList posts={state.posts} />
            );

            const listItems = $wrapper.find("li");
            expect(listItems.length).toBe(state.posts.length);
            // FINAL_END
        });
    });
});