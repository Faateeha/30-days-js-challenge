/*Given an integer arr and a filtering function fn, return a new array with a fewer or equal number of elements.
The returned array should only cotain elements where fn(arr[i], i) evaluated to a truthy value.
please solve it without the built-in Array.filter method.*/

var filter = function(arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            res.push(arr[i]);
        }
    }
    return res;
}
