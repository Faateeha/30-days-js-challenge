/*Given an object, return a valid  JSON string of that object. You may assume the object only includes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by object.keys().*/
var jsonStringify =function(object){
    if(object === null || object === undefined) {
        return String(object);
    }

    if(Array.isArray(object)) {
        const values = object.map((obj) => jsonStringify(obj));
        return `[${values.join(",")}]`;
    }

    if(typeof object === 'object') {
        const keys = object.keys(object);
        const keyValPairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
        return `{${keyValPairs.join(",")}}`;
    }

    if(typeof object === 'string') {
        return `"${String(object)}"`;
    }
    return String(object);
}