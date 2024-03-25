/*Write a code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.*/
Array.prototype.groupBy = function(fn) {
    const res = {};

    for (const obj of this){
        const key = fn(obj);
        res[key] = res[key] || [];
        res[key].push(obj); 
    }
    return res;
};