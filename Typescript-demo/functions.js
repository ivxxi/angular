"use strict";
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(19, 33));
const subtract = (num1, num2) => num2 - num1;
console.log(subtract(19, 33));
//optional parameters  
const multiply = (num1, num2, num3) => {
    return num3 ? num1 * num2 * num3 : num1 * num2;
    //if num3 exists multiply all 3 else multiply the 2 numbers 
};
console.log(multiply(2, 4));
const addArray = (num1, num2, ...num3) => {
    return num1 + num2 + num3.reduce((acc, num) => acc + num, 0);
};
console.log(addArray(4, 5, ...[1, 2, 3])); //#1
let array = [1, 2, 3, 4, 5];
console.log(addArray(6, 7, ...array)); //#2
console.log(addArray(4, 5, 1, 2, 3)); //#3 
// function getItems<T>(items: T[]): T[] {
//     return new Array<T>().concat(items);
//}
//generic functions
const getItems = (items) => {
    return new Array().concat(items);
};
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd', 'e']);
