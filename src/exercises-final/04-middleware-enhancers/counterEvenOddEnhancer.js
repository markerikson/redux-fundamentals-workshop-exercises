

export default function counterEvenOddEnhancer(originalCreateStore) {
    return function newCreateStore(rootReducer, preloadedState, enhancer) {
        const store = originalCreateStore(rootReducer, preloadedState, enhancer);

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
    }
}