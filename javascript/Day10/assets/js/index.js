// TASK 1 – LET
// ------------
// Create:
// let salary = 20000;
// Change salary to 25000 and print the final salary.
// Use:
// let

let salary = 20000;
salary = 25000;
console.log(salary);

// TASK 2 – CONST
// ------------
// Create:
// const country = "India";
// Print:
// My Country is India
// Use:
// const

const country = "india";
console.log(`my country is ${country}`);

// TASK 3 – TEMPLATE LITERAL
// -------------------------
// Create:
// let name = "Arun";
// let age = 25;
// Print:
// My name is Arun and I am 25 years old.
// Use
// Template Literal ${}

let name1 = "Arun";
let age = 25;
console.log(`my Name is ${name1} and I am ${age} years old.`);

// TASK 4 – TEMPLATE LITERAL CALCULATION
// -------------------------------------
// Create:
// let price = 500;
// let quantity = 4;
// Calculate total and print:
// Total Price = 2000
// Use:
// Arithmetic Operator
// Template Literal

let price = 500;
let quality = 4;
console.log(`Total Price = ${price * quality}`);

// TASK 5 – DEFAULT PARAMETER
// --------------------------
// Create a function:
// greet(name)
// Give "Guest" as the default value.
// Call:
// greet("Arun");
// greet()
// Expected:
// Welcome Arun
// Welcome Guest
// Use:
// Default Parameter

function fuctionname (name3 = "guest"){
    console.log(`Welcome ${name3}` );
}
fuctionname("Deepak");
fuctionname();

// TASK 6 – ARRAY DESTRUCTURING
// ----------------------------
// Create:
// const colors = ["Red", "Green", "Blue"];
// Using array destructuring, store the values in:
// first
// second
// third
// Print all three values.
// Use:
// Array Destructuring

const colors = ["Red", "Green", "Blue"];
let [first, second, third] = colors
console.log(first);
console.log(second);
console.log(third);

// TASK 7 – OBJECT DESTRUCTURING
// -----------------------------
// Create:
// const student = {
// name: "Arun",
// age: 20,
// city: "Chennai"
// };
// Using object destructuring, get:
// name
// age
// cit
// Print;
// Arun
// 20
// Chennai
// Use:
// Object Destructuring

const studennt = {
    name :"arun",
    age2 : 25,
    city : "chennai"
}
let {name,  age2,city } = studennt

console.log(name);
console.log(age2);
console.log(city);


// TASK 8 – SPREAD
// ---------------
// Create:
// const numbers = [10, 20, 30];
// Create another array and add:
// 40
// 50
// Expected:
// [10, 20, 30, 40, 50]
// Use:
// Spread Syntax

const numbers =  [10,20,30];
const addnumbers = [...numbers,  40, 50]

console.log(addnumbers);

// TASK 9 – REST
// -------------
// Create a function that accepts any number of values.
// Example:
// showNumbers(10, 20, 30, 40);
// Expected:
// [10, 20, 30, 40]
// Use:
// Rest Parameter

function numberadd (...numbers1){

    console.log(numbers1);
    
}
console.log(numberadd(10,20,30,40));

// TASK 10 – ARROW FUNCTION
// ------------------------
// Create an arrow function that accepts two numbers
// and returns their addition.
// Example:
// add(10, 20);
// Expected:
// 30
// Use:
// Arrow Function
// Return
// Arithmetic Operator

let add2 = (a,b) => {
    return a+b;
}

console.log(add2(10,20));
