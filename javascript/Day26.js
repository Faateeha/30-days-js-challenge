/*Enhance all functions to have the callpolyfill method. The method accepts an object obj as its first parameter and any number of additional arguments.*/
Function.prototype.callpolyfill = function(context, ...args){
    return this.apply(context, args);
}