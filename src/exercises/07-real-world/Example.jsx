import React, {Component} from "react";
import {Provider} from "react-redux";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";
import Counter from "./Counter";

import configureStore from "./store";


const store = configureStore();

// TODO We need to load the initial data.  Write one or more thunks in actions.js that
// TODO fetch the posts and authors, and dispatch them here to load data on startup.


export default class ReactReduxExample extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>Real-World-ish Example</h3>
                    <PostsList />
                    <NewPostForm />
                    <Counter />
                </div>
            </Provider>
        )
    }
}