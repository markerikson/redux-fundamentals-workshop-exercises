export function increment() {
    return {type : "INCREMENT"};
}

export function add5() {
    return {type : "ADD_5"};
}

export function increment3Times() {
    return [
        {type : "INCREMENT"},
        {type : "INCREMENT"},
        {type : "INCREMENT"},
    ];

}