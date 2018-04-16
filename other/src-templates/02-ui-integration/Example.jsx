import React, {Component} from "react";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";

export default class UIIntegrationExample extends Component {
    render() {
        return (
            <div>
                <h3>UI Integration Example</h3>
                <PostsList />
                <NewPostForm />
            </div>
        )
    }
}