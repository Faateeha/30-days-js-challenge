/*Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
. When two instances of this class are added together with the + operator, the result should be the sum of the two arrays.
. When the string() function is called on the instance, it will return a comma separated string surronded by brackets.*/

var ArrayWrapper = function(nums){
    this.nums = nums;
}

ArrayWrapper.prototype.valueOf = function(){
    return this.nums.reduce(
        (n, a) => n + a, 0
    )
}

ArrayWrapper.prototype.toString = function(){
    return `[${String(this.nums)}]`;
}