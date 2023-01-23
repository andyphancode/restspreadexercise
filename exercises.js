// ES5 Code: 
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// Refactored above function ES2015

const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 === 0);

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// Should the function itself be named findMin, or should I make a variable called findMin?

// function findMin(...nums) {
//     return nums.reduce((accumulator, nextValue) => {
//         (nextValue < accumulator) ? nextValue : accumulator
//     })
// }

const findMin = (...nums) => nums.reduce((accumulator, nextValue) => ((nextValue < accumulator) ? nextValue : accumulator));

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// function mergeObjects(object1,object2) {
//     return {...object1, ...object2};
// }

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// function doubleAndReturnArgs(array,...morenums) {
//     const args = [...array,...morenums];
//     return args.map(value => value * 2);
// }

const doubleAndReturnArgs = (array,...morenums) => [...array,...morenums].map(value => value *2);

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }


const removeRandom = items => {
    const newItems = [...items];
    const randomItem= newItems[Math.floor(Math.random() * newItems.length)];
    return newItems.filter(value => value === randomItem ? false : true);
};

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (array1, array2) => {return [...array1,...array2]};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
// }


const addKeyVal = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
};


/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj,key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}



/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {return {...obj1,...obj2}};


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

