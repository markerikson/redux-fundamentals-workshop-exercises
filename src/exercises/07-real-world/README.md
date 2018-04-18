# Exercise 06: Unit Testing

We've updated the tiny blogging app from exercise 03 and added the ability to filter the list of posts
based on a selected author.  Now, we need some unit tests for the code.

The main pieces we're looking to test are the reducer functions and the new `<PostsFilter>` component.  There's empty
tests already set up in `rootReducer.spec.js` and `PostsList.spec.js`.  Right now, the tests all have placeholders
and are failing.  Fill them out appropriately based on the descriptions, and make them pass.

To run these tests, run `yarn test` at a command prompt.  The Jest testing environment will start up.  By default,
it runs _all_ tests, both in the `exercises` and `exercises-final` folder.  You can filter it to only run the exercise
tests by pressing the `'p'` key, and typing in `exercises/06` as the filtering text.

The reducer tests and the test for the `mapState` function should be easy to write, and don't require any special
handling.  To test the `<PostsList>` component, you'll need to use the Enzyme library ( http://airbnb.io/enzyme/ ),
which is already configured and set up.

You can use the `shallow(<SomeComponent />)` and `mount(<SomeComponent />)` functions to fake-render the React component,
then use the "wrapper" object that's returned to inspect the contents of the component.
