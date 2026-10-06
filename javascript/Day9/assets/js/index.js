let company = "LNG"
function showEmployee(){
    let employee = "Deepak"
    console.log(company);
    console.log(employee);
    
}

showEmployee()

// TASK 2 – BLOCK SCOPE
// --------------------
// Create an if condition:
// if (true) {
//     Create:
//     let age = 25;
//     const city = "Chennai";
// }
// Print age and city:
// 1. Inside the if block
// 2. Outside the if block
// Observe the result.
// Then change:
// let age
// to:
// var age
// and check the difference.

function ifCondition(){
    if(true){
        var age = 25;
        var city = "Chennai"  
    }
    console.log(age);
    console.log(city);
}
ifCondition()

// TASK 3 – HOISTING
// -----------------
// Create these three examples separately:
// Example 1:
// Print a variable before declaring it using:
// var
// Example 2:
// Print a variable before declaring it using:
// let
// Example 3:
// Call this function before creating it:
// greet();
// The function should print:
// "Welcome to JavaScript"
// Observe:
// 1. What happens with var?
// 2. What happens with let?
// 3. Does the function declaration work before its declaration?

// exmaple1
console.log(name1);
var name1 = "deepak"

// exmaple2
// console.log(name2);
// let name2 = "deepak"

greet();

function greet(){
    console.log("welcome to javascript");
    
}

// TASK 4 – CLOSURE COUNTER
// ------------------------
// Create a function:
// createCounter()
// Inside create:
// let count = 0;
// Create another function inside it.
// Every time the inner function runs:
// Increase count by 1
// and print count.
// Return the inner function.
// Call it 3 times.
// Expected Output:
// 1
// 2
// 3
// Concept:
// Outer Function
//      ↓
// Inner Function
//      ↓
// Remember count
//      ↓
// Closure

function outerCounter(){
    let count = 0;
    function innercounter(){
        console.log(count);
        count++
        
    }
    return innercounter
}
let result = outerCounter();
result();
result();
result();