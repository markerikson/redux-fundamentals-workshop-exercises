# Exercise 07: Real-World Usage

It's time to see how all the pieces come together.  We've got another variation on the blog post management app, but
there's several parts that are missing.


- `actions.js`: turn `loadInitialData()` into a thunk action creator that fetches both post entries and author entries
   using the functions in `api.js`, and dispatch actions to load them into the store
- `Example.jsx`: dispatch `loadInitialData()` directly into the store to fetch the data as soon as the app starts
- `PostsList.jsx`: write a memoized selector using Reselect's `createSelector` function, so that the filtered list of
   posts is only recalculated when the list or filter value changes
- `store.js`: The store needs to be configured to use the Redux DevTools Extension on startup, and to use Hot Module
   Replacement for the root reducer function.
- There's also a very subtle bug somewhere that's keeping the filtering logic from working right.  Use the Redux
  DevTools Extension to track down what's happening when you try to filter the posts by author, and fix it.
