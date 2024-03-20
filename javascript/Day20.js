/* Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences*/

function objDiff(o1, o2) {
    
    if(!isObject(o1) && !isObject(o2)) {
        return o1 === o2 ? {} : [o1, o2];
     }
    if (!isObject(o1) || !isObject(o2)) {
         return [o1, o2];
    }
    if (Array.isArray(o1) && Array.isArray(o2)) {
          return [o1, o2];
     }
     const diff = {};

     for (const key in o1) {
        if (o2.hasOwnProperty(key)) {
            const res = objDiff(o1[key], o2[key]);
            if (Object.keys(res).length > 0) {
              diff[key] = res;
            }    
        }
     }

     return diff;


    function isObject(obj) {
        return typeof obj === 'object' && obj !== null;
    }
}