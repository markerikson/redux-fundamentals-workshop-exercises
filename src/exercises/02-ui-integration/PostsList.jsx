import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO Get the posts and users lists from the store instead
            posts : [],
            users : [],
        };


        // TODO subscribe to the store
    }

    onStoreUpdated = () => {
        // TODO Update the list of posts and users in state to re-render
    }

    render() {
        const {posts, users} = this.state;

        const renderedPosts = posts.map(post => {
            const user = users.find(user => user.username === post.username) || {name : "Unknown"};
            const {name} = user;

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