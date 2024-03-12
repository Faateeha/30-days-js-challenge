/*Given an array of asynchronous functions functions and a pool limit n, return an asynchronous function promisepool. it should return a promise that resolves when all the input functions resolve.*/
var promisePool = async function(functions, n){
    return new Promise((resolve, reject) => {
        let i = 0;
        let inProgress = 0;

        function callback(){
            if (i === functions.length && inProgress === 0){
                resolve();
            }
    
            while(i < functions.length && inProgress < n) {
                functions[i++]()
                    .then(() => {
                        inProgress--;
                        callback();
                    });
                inProgress++;
            }
        } 
        callback();
    })
}