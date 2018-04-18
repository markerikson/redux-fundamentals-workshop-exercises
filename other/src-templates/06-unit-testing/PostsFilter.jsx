import React, {Component} from "react";
import {connect} from "react-redux";

import {setPostAuthorFilter, clearPostAuthorFilter} from "./actions";


const mapState = (state) => {
    return {
        postsAuthorFilter : state.postsAuthorFilter,
        authors : state.authors,
    };
}

const actions = {setPostAuthorFilter, clearPostAuthorFilter};


export class PostsFilter extends Component {
    onSelectedAuthorChanged = (e) => {
        const {value} = e.target;

        if(value) {
            this.props.setPostAuthorFilter(value);
        }
        else {
            this.props.clearPostAuthorFilter();
        }
    }

    render() {
        const {authors = [], postsAuthorFilter} = this.props;

        const authorsOptions = authors.map(author => <option key={author.authorId} value={author.authorId}>{author.name}</option>);
        // Add an empty selection option
        authorsOptions.unshift(<option key="empty" value="" />);

        return (
            <div>
                <label>Show only posts by:</label> &nbsp;
                <select value={postsAuthorFilter || ''} onChange={this.onSelectedAuthorChanged}>{authorsOptions}</select>
            </div>
        )
    }
}

export default connect(mapState, actions)(PostsFilter);
