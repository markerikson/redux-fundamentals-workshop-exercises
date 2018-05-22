import React, {Component} from "react";
import {connect} from "react-redux";
import {createSelector} from "reselect";

import {deletePost} from "./actions";

import PostsFilter from "./PostsFilter";

// WORKSHOP_START
// TODO This filtering logic is being re-run every time the store updates, even
// TODO if the action isn't related to the posts. Write a memoized selector that
// TODO only re-filters if state.posts or state.postsAuthorFilter have changed.
// WORKSHOP_END

// FINAL_START
const selectPosts = state => state.posts;
const selectFilter = state => state.postsAuthorFilter;
const selectFilteredPosts = createSelector(
    [selectPosts, selectFilter],
    (posts, postsAuthorFilter) => {
        let postsToShow = posts;

        if(postsAuthorFilter !== null) {
            postsToShow = posts.filter(post => post.authorId === postsAuthorFilter);
        }

        return postsToShow;
    }
)
// FINAL_END

export const mapState = (state) => {
    // WORKSHOP_START
    const {posts, postsAuthorFilter, authors} = state;
    let postsToShow = posts;

    if(postsAuthorFilter !== null) {
        postsToShow = posts.filter(post => post.authorId === postsAuthorFilter);
    }
    // WORKSHOP_END
    // FINAL_START
    const {authors} = state;
    const postsToShow = selectFilteredPosts(state);
    // FINAL_END

    return {
        posts : postsToShow,
        authors,
    };
}

const actions = {deletePost};

export class PostsList extends Component {
    render() {
        const {posts = [], authors = []} = this.props;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || {name : "Unknown"};
            const {name} = author;

            return (
                <li key={post.id }>
                    <button onClick={() => this.props.deletePost(post.id)}>X</button>&nbsp;
                    {post.title}, by {name}
                </li>
            );
        });

        return (
            <div>
                <h4>Posts</h4>
                <PostsFilter />
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}

export default connect(mapState, actions)(PostsList);
