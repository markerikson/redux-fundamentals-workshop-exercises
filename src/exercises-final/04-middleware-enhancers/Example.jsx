import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "./store";

import Counters from "./Counters";

export default class MiddlewareExample extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>Middleware Example</h3>
                    <Counters />
                </div>
            </Provider>
        )
    }
}