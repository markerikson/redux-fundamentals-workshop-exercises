import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // WORKSHOP_START
            // TODO Get the posts and users lists from the store instead
            posts : [],
            authors : [],
            // WORKSHOP_END
            // FINAL_START
            posts : store.getState().posts,
            authors : store.getState().authors,
            // FINAL_END
        };


        // WORKSHOP_START
        // TODO subscribe to the store
        // WORKSHOP_END
        // FINAL_START
        store.subscribe(this.onStoreUpdated);
        // FINAL_END
    }

    onStoreUpdated = () => {
        // WORKSHOP_START
        // TODO Update the list of posts and users in state to re-render
        // WORKSHOP_END
        // FINAL_START
        const {posts, authors} = store.getState();
        this.setState({posts, authors});
        // FINAL_END
    }

    render() {
        const {posts, authors} = this.state;

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