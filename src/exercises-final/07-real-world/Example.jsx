import React, {Component} from "react";
import {Provider} from "react-redux";

import PostsList from "./PostsList";
import NewPostForm from "./NewPostForm";
import Counter from "./Counter";

import configureStore from "./store";

import {loadInitialData} from "./actions";

const store = configureStore();

store.dispatch(loadInitialData());


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