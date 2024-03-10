/*Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds.it can resolve any value*/
async function sleep(millis){
    function callback(resolve, reject){
        setTimeout(resolve, millis);
    }

    return new Promise(callback);
}