import {postsReducer, postsAuthorFilterReducer} from "./rootReducer";

describe("Reducers", () => {
    describe("postsReducer", () => {
        // WORKSHOP_START
        // TODO Test each of the cases that `postsReducer()` handles
        // WORKSHOP_END
        test("adds a new post", () => {
            // WORKSHOP_START
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const state = [];
            const action = {
                type : "ADD_NEW_POST",
                id : 1,
                authorId : "lskywalker",
                title : "Why My Best Friends are Droids"
            };

            const result = postsReducer(state, action);

            expect(result.length).toBe(1);
            const [firstPost] = result;
            expect(firstPost.id).toBe(action.id);
            expect(firstPost.authorId).toBe(action.authorId);
            expect(firstPost.title).toBe(action.title);
            // FINAL_END
        })

        test("removes a post by ID", () => {
            // WORKSHOP_START
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const state = [
                {id : 1, authorId : "bkenobi", title : "How to Train Your Krayt Dragon"},
                {id : 2, authorId : "lskywalker", title : "101 Ways to Skin a Taun-Taun"},
                {id : 3, authorId : "bkenobi", title : "Do Force Ghosts Exist?"},
            ];

            const action = {
                type : "DELETE_POST",
                postId : 2,
            };

            const result = postsReducer(state, action);

            expect(result.length).toBe(2);

            const remainingIds = result.map(post => post.id);
            expect(remainingIds.includes(action.postId)).toBe(false);
            // FINAL_END
        })
    });

    describe("postsAuthorFilterReducer", () => {
        test("sets the filter value", () => {
            // WORKSHOP_START
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const state = undefined;
            const action = {
                type : "VIEW_POSTS_BY_AUTHOR",
                authorId : "lskywalker"
            };

            const result = postsAuthorFilterReducer(state, action);
            expect(result).toBe(action.authorId);
            // FINAL_END
        })

        test("clears the filter value", () => {
            // WORKSHOP_START
            expect(true).toBe(false);
            // WORKSHOP_END
            // FINAL_START
            const state = undefined;
            const action = {
                type : "CLEAR_POSTS_FILTER",
            };

            const result = postsAuthorFilterReducer(state, action);
            expect(result).toBe(null);
            // FINAL_END
        })
    })
});