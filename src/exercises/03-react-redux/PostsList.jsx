import React, {Component} from "react";
// WORKSHOP_START
// TODO Import `connect()`, write a `mapState()` function that extracts the
// TODO data this component needs, and default-export the connected component.
// WORKSHOP_END

// FINAL_START
import {connect} from "react-redux";

const mapState = (state) => {
    return {
        posts : state.posts,
        authors : state.authors,
    };
}
// FINAL_END

export class PostsList extends Component {
    render() {
        const {posts = [], authors = []} = this.props;

        // WORKSHOP_START
        // TODO Bonus: convert the list items into a separate `<PostListItem> component, and connect it.
        // TODO        Be sure to pass the post ID as a prop, and access it using `ownProps` in `mapState`.
        // WORKSHOP_END
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


// WORKSHOP_START
export default PostsList;
// WORKSHOP_END
// FINAL_START
export default connect(mapState)(PostsList);
// FINAL_END
