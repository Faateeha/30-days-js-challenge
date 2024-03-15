/*Given a function fn and a time in milliseconds t, return a throttled version of that function.
A throttled function is first called without delay and then, for a time interval of t milliseconds, cant be executed but should store the latest function arguments provided to call fn with them after the end of the delay*/
var throttle = function(fn, t){
    let isThrottled = false;
    let nextArgs = undefined;

    return function(...args) {
        if (isThrottled){
            nextArgs = args;
        } else {
            fn(...args);
            isThrottled = true;
            setTimeout(helper, t);
        }

        function helper(){
            isThrottled = false;
            if(nextArgs){
                fn(...nextArgs);
                isThrottled = true;
                nextArgs = null;
                setTimeout(helper, t);
            } else{
                isThrottled = false;
            }
        }
    }
}