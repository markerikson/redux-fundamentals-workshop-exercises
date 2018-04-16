import React, {Component} from "react";

import store from "./store";

export default class PostsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts : store.getState().posts,
            users : store.getState().users,
        };


        store.subscribe(this.onStoreUpdated);
    }

    onStoreUpdated = () => {
        const {posts, users} = store.getState();
        this.setState({posts});
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