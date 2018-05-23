import React, {Component} from "react";

import {connect} from "react-redux";

const mapState = (state) => {
    return {
        posts : state.posts,
        authors : state.authors,
    };
}

export class PostsList extends Component {
    render() {
        const {posts = [], authors = []} = this.props;

        const renderedPosts = posts.map(post => {
            const author = authors.find(author => author.authorId === post.authorId) || {name : "Unknown"};
            const {name} = author;

            return <li key={post.id }>{post.title}, by {name}</li>;
        });

        return (
            <div>
                <h4>Posts</h4>
                <ul>
                    {renderedPosts}
                </ul>
            </div>
        );
    }
}


export default connect(mapState)(PostsList);
