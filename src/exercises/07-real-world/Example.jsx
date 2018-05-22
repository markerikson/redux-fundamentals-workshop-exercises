import React, {Component} from "react";
import {Provider} from "react-redux";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";
import Counter from "./Counter";

import configureStore from "./store";

// FINAL_START
import {loadInitialData} from "./actions";
// FINAL_END

const store = configureStore();

// WORKSHOP_START
// TODO We need to load the initial data.  Write one or more thunks in actions.js that
// TODO fetch the posts and authors, and dispatch them here to load data on startup.
// WORKSHOP_END
// FINAL_START
store.dispatch(loadInitialData());
// FINAL_END


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