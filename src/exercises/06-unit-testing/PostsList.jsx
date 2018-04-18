import React, {Component} from "react";

import {connect} from "react-redux";

import {deletePost} from "./actions";

import PostsFilter from "./PostsFilter";


export const mapState = (state) => {
    const {posts, postsAuthorFilter, authors} = state;
    let postsToShow = posts;

    if(postsAuthorFilter !== null) {
        postsToShow = posts.filter(post => post.authorId === postsAuthorFilter);
    }

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
