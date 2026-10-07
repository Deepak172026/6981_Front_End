// let numbers = [10, 20, 30, 40, 50];
// Create a new array where every number is multiplied
// by 2.
// Expected Output:
// [20, 40, 60, 80, 100]
// Use:
// map()

let number = [10, 20, 30, 40, 50];
const numbers = number.map((number) => number*2)
console.log(numbers);

// TASK 2 – GET EVEN NUMBERS
// -------------------------
// Given:
// let nmbers = [10, 15, 20, 25, 30, 35, 40];
// Create a new array containing only even numbers.
// Expected Output:
// [10, 20, 30, 40]
// Use:
// filter()

let nmber1 = [10, 15, 20, 25, 30, 35, 40];
const filter = nmber1.filter((num1 => num1%2==0))
console.log(filter);

// TASK 3 – FIND FIRST NUMBER
// --------------------------
// Given:
// let numbers = [10, 25, 35, 50, 60];
// Find the first number greater than 30.
// Expected Output:
// 35
// Use:
// find()

const number3 = [10, 25, 35, 50, 60];
const result3 = number3.find((num3) => num3>30)
console.log(result3);

// TASK 4 – FIND STUDENT
// ---------------------
// Given:
// let students = [
// { id: 1, name: "Arun", mark: 75 },
// { id: 2, name: "Priya", mark: 90 },
// { id: 3, name: "Kumar", mark: 65 }
// ];
// Find the student whose id is 2.
// Expected Output:
// {
// id: 2,
// name: "Priya",
// mark: 90
// }
// Use:
// find()

const students = [
    { id: 1, name1: "Arun", mark: 75 },
    { id: 2, name1: "Priya", mark: 90 },
    { id: 3, name1: "Kumar", mark: 65 }
];
const studentResult = students.find((student) => {
    return student.id == 2
})
console.log(studentResult.id);
console.log(studentResult.name1);
console.log(studentResult.mark);

// TASK 5 – FILTER EMPLOYEES
// -------------------------
// Given:
// let employees = [
// { name: "Arun", salary: 25000 },
// { name: "Priya", salary: 45000 },
// { name: "Kumar", salary: 30000 },
// { name: "Ravi", salary: 50000 }
// ];
// Get all employees whose salary is 30000 or above.
// Use:
// filter()

const employees = [
{ name: "Arun", salary: 25000 },
{ name: "Priya", salary: 45000 },
{ name: "Kumar", salary: 30000 },
{ name: "Ravi", salary: 50000 }
];

const employeesResult = employees.filter((emp) => {
    return emp.salary>=30000;
})
console.log(employeesResult);

// TASK 6 – GET ONLY NAMES
// -----------------------
// Using the same employees array, create a new array
// containing only employee names.
// Expected Output:
// ["Arun", "Priya", "Kumar", "Ravi"]
// Use:
// map()

const employees6 = [
{ name: "Arun", salary: 25000 },
{ name: "Priya", salary: 45000 },
{ name: "Kumar", salary: 30000 },
{ name: "Ravi", salary: 50000 }
];
const employees6Result = employees6.map((emp) => emp.name)
console.log(employees6Result);







