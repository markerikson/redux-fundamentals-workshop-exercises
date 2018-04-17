# Exercise 04: Middleware and Store Enhancers

This exercise is yet another counter example... but it has a few twists, which you need to implement as
middleware and store enhancers.

The root reducer stores a counter value that is incremented whenever `"INCREMENT"` is dispatched, and is also
updated when `"ADD_5"` is dispatched (which of course adds 5).

It also stores a value that is supposed to show how many times `"INCREMENT"` has been dispatched.

There are a few rules for how the app should behave:

- If the counter is currently odd, the `"ADD_5"` action should never even reach the reducer
- We need some logic to track how many times `"INCREMENT"` has been dispatched, and dispatch an `"INCREMENTS_SEEN"`
  action to update that value appropriately.
- We want to be able to dispatch multiple `"INCREMENT"` actions with one button click, in the form of an array of actions
- When the UI checks the store state, it should automatically have a field in the state that says whether the current
  counter value is "even" or "odd".

  You need to implement this logic in the form of three middlewares and a store enhancer.  See further instructions
  in these files:

  - `ignoreAddIfOddMiddleware.js`
  - `dispatchMultipleActionsMiddleware.js`
  - `countIncrementsSeenMiddleware.js`
  - `counterEvenOddEnhancer.js`
