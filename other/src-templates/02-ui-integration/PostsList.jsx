import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // WORKSHOP_START
            // TODO Get the posts and users lists from the store instead
            posts : [],
            users : [],
            // WORKSHOP_END
            // FINAL_START
            posts : store.getState().posts,
            users : store.getState().users,
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
        const {posts, users} = store.getState();
        this.setState({posts});
        // FINAL_END
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