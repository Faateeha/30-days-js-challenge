/*Write a generator function that returns a generator object which yields the fibonacci sequence */
var fibGenerator = function*(){
    let n1 = 0, n2 = 1;

    while (true){
        yield n1;
        [n1, n2] = [n2, n1 + n2];
    }
};