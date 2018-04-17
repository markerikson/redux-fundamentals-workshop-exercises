# Exercise 02: UI Integration

This is a small app for listing blog posts.  The state tree stores a list of blog posts
and a list of users.  Each post entry has a username associated.

There's two main components: `<PostsList>` and `<NewPostForm>`.  Both of them need access to the Redux store.  The
`<PostsList>` needs to display a list of posts with the right author details, and the `<NewPostForm>` needs to let
the application user select a post author and dispatch an action containing the new post title and the author ID.