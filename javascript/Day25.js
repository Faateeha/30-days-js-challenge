/*Write a function that checks if a given array is an instance of a given class or superclass.*/
var checkIfInstanceOf = function(obj, classFunction){
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }

    let currPrototype = object.getPrototypeOf(obj);
    while(currPrototype !== null){
        if (currPrototype === classFunction.prototype) {
            return true;
        }
        currPrototype = object.getPrototypeOf(currPrototype);
    }
    return false;
};