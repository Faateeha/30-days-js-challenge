/*Given a multi-dimensional array arr and a depth n, return a flattened version of that array.*/
var flat = function (arr, n) {
    const res = [];

    function helper(arr, n){
        for (const val of arr) {
            if (typeof val === 'object' && depth < n) {
                helper(val, depth + 1);
            } else {
                res.push(val);
            }
        }
        return res;
    }
    return helper(arr, 0);  
};