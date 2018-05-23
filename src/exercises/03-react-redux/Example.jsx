import React, {Component} from "react";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";

// TODO Import the store, and use React-Redux's <Provider> inside <ReactReduxExample>


export default class ReactReduxExample extends Component {
    render() {
        return (
            <div>
                <h3>React-Redux Example</h3>
                <PostsList />
                <NewPostForm />
            </div>
        )
    }
}