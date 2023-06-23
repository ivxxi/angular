//string
let lname : string;
lname = "john";
let yourName : string = lname.toUpperCase()
console.log(yourName)

//number
let age : number;
age = 25;
let mark = "45"
let result = parseInt(mark);

//boolean
let isValid : boolean = false;
console.log(isValid);

//array
//array syntax
let empList : string[];
let numList : Array<number>;

empList = ["John", "Jane", "Doe"];
numList = [1, 2, 3, 4, 5, 6];

let numLess = numList.filter((num) => num < 3);
let numEven = numList.filter((num) => num % 2 == 0);
console.log(numLess, numEven);
 
let empFind = empList.find((empName) => empName === "Jane");
console.log(empFind);

let sumNumList = numList.reduce((acc, num) => acc + num);
console.log(sumNumList);

//enum
const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;

//tuple
let swapNum: [firstNum:number, secondNum:number]

const swapNumber = (num1:number, num2:number) : [number, number] => {
    return [num2, num1]
}
swapNum = swapNumber(10, 20);
console.log(swapNum)

//any
//try to avoid using any 
let department : any;
department = 'IT';
department = 10;c