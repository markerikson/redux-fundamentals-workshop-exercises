import React, {Component} from "react";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";

import {Provider} from "react-redux";
import store from "./store";


export default class ReactReduxExample extends Component {
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
}