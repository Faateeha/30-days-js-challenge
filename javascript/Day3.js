/*Write a fuction createCounter, it should accept an initial integer init. It should return an object with three functions.
The three function are:
increment()
decrement()
reset()*/

var createCounter = function(init) {
    let count = init;

    function increment(){
        return ++count;
    }

    function decrement(){
        return --count;
    }

    function reset(){
        count = init;
        return count;
    }

    return {
        increment,
        decrement,
        reset,
    }
};

const counter = createCounter(5);

