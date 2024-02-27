//Given an integer n, return a counter function. This counter function initially returns n, and then returns 1 more than the previous value every subsequent time it is called.


var createCounter = function(n){
    return function(){
        return n++;
    }
};

const counter = createCounter(10);