# Redux Fundamentals Workshop - Exercises

## Thank you!

- [Create React App][https://github.com/facebook/create-react-app].
- [Kent C Dodds](https://github.com/kentcdodds), whose [kentcdodds/react-workshop](https://github.com/kentcdodds/react-workshop) repo formed the basis for this one
- [Ryan Florence](https://github.com/ryanflorence), for helping get everything set up.

## Setup

Before attending the workshop, please make sure you have followed these instructions to set up the exercises, and make sure you can run them.

### Step 1 - Dependencies

You will need:

* [Git](http://git-scm.com/downloads)
* [node](https://nodejs.org/)
* [yarn](https://yarnpkg.com/en/docs/install)

Please install them if you don't have them already.

### Step 2 - Clone the repository:

From the command line, clone the repository:

```sh
$ git clone https://github.com/markerikson/redux-fundamentals-workshop-exercises.git
```

### Step 3 - Install dependencies

```sh
$ cd redux-fundamentals-workshop-exercises
$ yarn
```

This will install all the dependencies for all of the exercises, _it might take a while_.

If you don't have Yarn installed, I've included a prebuilt copy as `yarn-full.js`.  Running `node yarn-full.js` should also install everything

You can use npm but yarn's caching will make it a better experience, especially since I've used Yarn's "offline mirror" feature to include all of the needed packages in the repo itself.


## Editing and Running the Exercises

### Intro Exercises

The first two sets of exercises are located in the `intro/exercises` folder.  They're simple HTML files that you can open up directly from the file system and view in your browser.

Each exercise HTML file has some unit tests set up.  If any tests fail, the background color of the page will be red (or pink-ish) when it loads.  If all tests pass, the background color will be green.

Edit the exercise HTML file directly, and refresh the page to see the changes.

There's a matching `intro/exercises-final` folder that contains the "correct' versions of each exercise, if you get stuck and need to compare.


### Other Exercises

The rest of the exercises are in the `src/exercises` folder.  As with the intro exercises, there's a matching `src/exercises-final` folder with the "correct" implementations.

Run the application using `yarn start`, and browse to `http://localhost:3000`.  You should see a list of available exercise sets on the left.  If you click on an exercise name, you'll see the "exercise" implementation running in the middle, and the "exercise-final" implementation running on the right.  This will let you compare how your implementation is behaving as it runs.

If the Create-React-App dev server is running, the application page _should_ automatically updated with any edits you make to the exercise files.  If that doesn't happen, stop the CRA server and re-run it using `yarn start`.


### All set up!

If you didn't get any errors running the setup scripts, you're ready to start the workshop!

If you want to explore a bit, there are a few things you can do:

1. go ahead and open `intro/exercises-final/01-js.html` in a browser (don't peak at the solution!). It should say `Hello World`. Go ahead and open the others if you like.
2. Then you can run `yarn run storybook` and open `http://localhost:9009` and poke around the storybook for our exercises :)
3. Then you could run the app with `yarn start`. This should pop open a window with a stopwatch which we'll be building.

### Any errors?

If you see any errors, read the output and try to follow any instructions. If that doesn't work, feel free to
[file an issue][https://github.com/markerikson/redux-fundamentals-workshop-exercises/issues/new] to ask for help and I'll help if I can. Good luck!


## LICENSE

MIT