/*Given an integer array nums, a reucer function fn, and an initial value init, return a reduced array.
solve it without using the built-in Array.reduce method*/
var reduce = function(nums, fn, init){
    let res = init;

    for(const n of nums){
        res = fn(res, n)
    }
    return res;
}