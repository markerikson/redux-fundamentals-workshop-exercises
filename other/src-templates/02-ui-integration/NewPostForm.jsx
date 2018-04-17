import React, {Component} from "react";

import store from "./store";
import {addNewPost} from "./actions";


export default class NewPostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : "",
            selectedAuthor : null,
            // WORKSHOP_START
            // TODO Get the authors lists from the store instead
            authors : [],
            // WORKSHOP_END
            // FINAL_START
            authors : store.getState().authors,
            // FINAL_END
        };
    }

    onSelectedAuthorChanged = (e) => {
        const {value} = e.target;
        this.setState({selectedAuthor : value || null})
    }

    onPostTitleChanged = (e) => {
        const {value} = e.target;
        this.setState({title : value});
    }

    onAddNewPostClicked = () => {
        // WORKSHOP_START
        // TODO Dispatch an action with the title and the selected author ID,
        // TODO using the `addNewPost()` action creator.  Afterwards, clear the post title field by
        // TODO setting it to an empty string.

        // TODO Bonus: only dispatch if there's the selected author isn't null, and
        // TODO the current post title isn't an empty string
        // WORKSHOP_END

        // FINAL_START
        const {title, selectedAuthor} = this.state;

        if(selectedAuthor !== null && title !== "") {
            store.dispatch(addNewPost(selectedAuthor, title));
            this.setState({title : ""});
        }
        // FINAL_END
    }

    render() {
        const {title, selectedAuthor, authors} = this.state;


        const authorsOptions = authors.map(author => <option key={author.authorId} value={author.authorId}>{author.name}</option>);
        // Add an empty selection option
        authorsOptions.unshift(<option key="empty" value="" />);

        return (
            <div>
                <h4>New Post</h4>
                <input type="text" onChange={this.onPostTitleChanged} value={title} />
                <div>Author: <select value={selectedAuthor || ''} onChange={this.onSelectedAuthorChanged}>{authorsOptions}</select></div>
                <div><button onClick={this.onAddNewPostClicked}>Add New Post</button></div>
            </div>
        )
    }
}