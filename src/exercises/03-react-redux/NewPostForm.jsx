import React, {Component} from "react";
import {addNewPost} from "./actions";

// WORKSHOP_START
// TODO Import `connect()`, write a `mapState()` function that extracts the
// TODO data this component needs, and default-export the connected component.
// TODO Be sure to hook up `addNewPost()` so the component can dispatch the action.
// WORKSHOP_END

// FINAL_START
import {connect} from "react-redux";

const mapState = (state) => {
    return {
        authors : state.authors,
    };
}

const actions = {addNewPost};
// FINAL_END



export class NewPostForm extends Component {
    state = {
        title : "",
        selectedAuthor : null,
    };

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

        // TODO Bonus: only dispatch if the selected author isn't null, and
        // TODO the current post title isn't an empty string
        // WORKSHOP_END

        // FINAL_START
        const {title, selectedAuthor} = this.state;

        if(selectedAuthor !== null && title !== "") {
            this.props.addNewPost(selectedAuthor, title);
            this.setState({title : ""});
        }
        // FINAL_END
    }

    render() {
        const {title = "", selectedAuthor = null} = this.state;
        const {authors = []} = this.props;

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

// WORKSHOP_START
export default NewPostForm;
// WORKSHOP_END

// FINAL_START
export default connect(mapState, actions)(NewPostForm);
// FINAL_END
