/*Given a function fn and a time in milliseconds t, return a debounced version of that function.
Debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time.*/
var debounce = function(fn, t){
    let id;
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), t)
    }
};