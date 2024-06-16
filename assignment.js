// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

let doubleAndReturnArgs = (arr, ...nums) =>  [...arr, ...nums.map(v => v * 2)]



/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (items) => {
    let maxIndex = items.length - 1;
    const min = 0;
    const randomNumber = Math.floor(Math.random() * maxIndex);
    return [...items.slice(min, randomNumber), ...items.slice(randomNumber + 1)]
}

/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair 
*/

let addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}
