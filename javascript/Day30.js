/*Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal*/
var inorderTraversal = function*(arr){
    for(const n of arr){
        if(Array.isArray(n)){
            yield* inorderTraversal(n);
        } else {
            yield n;
        }
    }
}