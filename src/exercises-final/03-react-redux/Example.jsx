import React, {Component} from "react";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";

// WORKSHOP_START
// TODO Import the store, and use React-Redux's <Provider> inside <ReactReduxExample>
// WORKSHOP_END
// FINAL_START
import {Provider} from "react-redux";
import store from "./store";
// FINAL_END


export default class ReactReduxExample extends Component {
    // WORKSHOP_START
    render() {
        return (
            <div>
                <h3>React-Redux Example</h3>
                <PostsList />
                <NewPostForm />
            </div>
        )
    }
    // WORKSHOP_END
    // FINAL_START
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>React-Redux Example</h3>
                    <PostsList />
                    <NewPostForm />
                </div>
            </Provider>
        )
    }
    // FINAL_END
}