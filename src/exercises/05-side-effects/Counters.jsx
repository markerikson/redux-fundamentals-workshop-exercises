import React, {Component} from "react";
import {connect} from "react-redux";

import * as actionCreators from "./actions";


const mapState = (state) => {
    return {
        counter : state.counter,
        lastCallSucceeded : state.lastCallSucceeded,
    };
}

export class Counters extends Component {
    render() {
        const {counter, lastCallSucceeded, ...actions} = this.props;

        return (
            <div>
                <div>Counter: {counter}</div>
                <div>Last API call succeeded: {lastCallSucceeded}</div>
                <br />
                <div>
                    <button onClick={actions.incrementThreeTimes}>Increment 3 Times</button>
                    <button onClick={actions.dispatchIncrementIfEven}>Increment If Even</button>
                    <button onClick={actions.fetchAndLoadAmount}>Fetch And Add</button>
                </div>
            </div>
        )
    }
}

export default connect(mapState, actionCreators)(Counters);