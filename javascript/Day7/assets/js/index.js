// TASK 1 – FRUIT ARRAY
// Create an array with 5 fruit names.
// Print:
// Complete array
// First fruit
// Third fruit
// Last fruit

let fruits = ["apple", "orange", "Banana", "Grapes"]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);

// Create:
// let colors = ["Red", "Blue", "Green", "Yellow"];
// Change "Blue" to "Black".
// Print the updated array.

let colors = ["White", "blue", "pink", "orange"]
colors[1] = "black"
console.log(colors);

// TASK 3 – LOOP STUDENT NAMES
// Create an array containing 5 student names.
// Using a for loop, print every student name one by one.
// Expected:
// Arun
// Kumar
// Priya
// Ravi
// Divya

let NAMES = ["deepak", "sam","mahesh", "lokesh"]

for(let a=0; a<=3; a++){
    console.log(NAMES[a]);
}

// TASK 4 – TOTAL MARKS
// Create:
// let marks = [80, 70, 90, 60, 85];
// Using a loop, calculate the total of all marks.
// Print:
// Total = ?

let total = 0;
let marks = [80, 60, 70,90];
for(b=0; b<=3; b++){
    total+=marks[b]
}
console.log(total);

// let numbers = [2, 4, 6, 8, 10];
// Using a loop, print each number multiplied by 2.
// Expected:
// 4
// 8
// 12
// 16
// 20

let multiplied
let numbers = [2, 4, 6, 8, 10];
for(let c=0; c<=4; c++){
    multiplied = numbers[c]*2
    console.log(multiplied);
}

// TASK 6 – STUDENT OBJECT
// Create a student object containing:
// name
// age
// course
// city
// Print only:
// name
// course
// using object properties.

let student = {name: "Deepak", age:19, course:"fullstack", city:"vellore" }
console.log(student.name);
console.log(student.course);

// TASK 7 – UPDATE EMPLOYEE
// Create an employee object:
// name = "Arun"
// salary = 25000
// role = "Developer"
// Update:
// salary = 30000
// Then print the updated employee object

let employee = {name:"arun", salary:25000, role:"developer"}
employee.salary=30000
console.log(employee.salary);






