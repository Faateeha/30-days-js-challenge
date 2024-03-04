//Given an array of functions, return a new function that is the function composition of the array of functions.

var compose = function(functions) {
    return function(x) {
        for (const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};