
// WORKSHOP_START
// TODO This store enhancer should return a new store API object that overrides  the actual store's
// TODO `getState()` method.  The replacement `geState()` should add an extra field called `counterEvenOdd`
// TODO that has either the string "even" or "odd" based on the current value of `state.counter`.
// TODO Don't modify the real store or real state objects - return new objects instead.
// WORKSHOP_END

export default function counterEvenOddEnhancer(originalCreateStore) {
    return function newCreateStore(rootReducer, preloadedState, enhancer) {
        const store = originalCreateStore(rootReducer, preloadedState, enhancer);

        // WORKSHOP_START
        return store;
        // WORKSHOP_END
        // FINAL_START
        function newGetState() {
            const originalState = store.getState();
            const counterIsEven = originalState.counter % 2 === 0;

            const newState = {
                ...originalState,
                counterEvenOdd : counterIsEven ? "even" : "odd"
            };

            return newState;
        }

        return {
            ...store,
            getState : newGetState
        };
        // FINAL_END
    }
}