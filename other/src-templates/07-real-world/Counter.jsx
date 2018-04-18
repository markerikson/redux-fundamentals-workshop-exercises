import React, {Component} from "react";
import {connect} from "react-redux";

import {increment} from "./actions";


const mapState = (state) => {
    return {
        counter : state.counter,
    };
}

export class Counters extends Component {
    render() {
        const {counter, increment} = this.props;

        return (
            <div>
                <h5>Counter</h5>
                <div>Value: {counter}</div>
                <br />
                <div>
                    <button onClick={increment}>Increment</button>
                </div>
            </div>
        )
    }
}

export default connect(mapState, {increment})(Counters);