import React, {Component} from "react";
import {connect} from "react-redux";

import * as actionCreators from "./actions";


const mapState = (state) => {
    return {
        counter : state.counter,
        incrementsSeen : state.incrementsSeen,
        counterEvenOdd : state.counterEvenOdd,
    };
}

export class Counters extends Component {
    render() {
        const {counter, incrementsSeen, counterEvenOdd = "Unknown", ...actions} = this.props;

        return (
            <div>
                <div>Counter: {counter}</div>
                <div><code>"INCREMENT"</code> actions seen: {incrementsSeen}</div>
                <div>Counter is even/odd: {counterEvenOdd}</div>
                <br />
                <div>
                    <button onClick={actions.increment}>Increment</button>
                    <button onClick={actions.add5}>Add 5</button>
                    <button onClick={actions.increment3Times}>Increment 3 Times</button>
                </div>
            </div>
        )
    }
}

export default connect(mapState, actionCreators)(Counters);