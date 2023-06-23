"use strict";
//string
let lname;
lname = "john";
let yourName = lname.toUpperCase();
console.log(yourName);
//number
let age;
age = 25;
let mark = "45";
let result = parseInt(mark);
//boolean
let isValid = false;
console.log(isValid);
//array
//array syntax
let empList;
let numList;
empList = ["John", "Jane", "Doe"];
numList = [1, 2, 3, 4, 5, 6];
let numLess = numList.filter((num) => num < 3);
let numEven = numList.filter((num) => num % 2 == 0);
console.log(numLess, numEven);
let empFind = empList.find((empName) => empName === "Jane");
console.log(empFind);
let sumNumList = numList.reduce((acc, num) => acc + num);
console.log(sumNumList);
let c = 0 /* Red */;
//tuple
let swapNum;
const swapNumber = (num1, num2) => {
    return [num2, num1];
};
swapNum = swapNumber(10, 20);
console.log(swapNum);
