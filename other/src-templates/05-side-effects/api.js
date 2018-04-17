import _ from "lodash";

const errors = ["Oh noes!", "Panic!", "Ack!", "Noooo!"];

export function fetchAmount() {
    const amount = _.random(1, 10);
    const succeeded = _.random(0, 1.0, true) > 0.3;

    if(succeeded) {
        return Promise.resolve(amount);
    }
    else {
        const errorMessage = _.sample(errors);
        return Promise.reject(errorMessage);
    }
}
