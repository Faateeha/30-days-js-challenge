/*Given a function fn, return a curried version of that function.
A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.*/
var curry = function(fn){
    let nums = [];

    return function curried(...args) {
        nums = [...nums, ...args];

        if (fn.length === nums.length) {
            const res = fn(...nums);
            nums = [];
            return res;
        } else {
            return curried;
        }
    };
};