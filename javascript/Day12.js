/*Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function*/
var timeLimit = function(fn, t){
    return async function(...args){
        return new Promise((resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);

            
            fn(...args)
                 .then((res) => resolve(res))
                 .catch((err) => reject(err))
                 .finally(() => clearTimeout(id));
        })
    }
};