/*Given an array arr and a chunk size, return a chunked array. A chunked array contains the original elements in arr, but consist of subarrays each of length size.*/
var chunk = function(arr, size){
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;

}