// Task 1 — Closure (Counter Application)
// Create a closure using arrow functions.
// Requirements:
// Outer function createCounter() should contain count = 0.
// Return an inner arrow function.
// Every time the inner function executes, increase count by 10
// Store the returned function in a variable.
// Expected Output:
// 10
// 20
// 30
// 40
// 50

const outerFunction = () =>{
    let number = 0;

    const innerFunction = () =>{
        number+=10
        console.log(number);
    }
    return innerFunction
}

const expressionFunction = outerFunction()
expressionFunction ()
expressionFunction ()
expressionFunction ()
expressionFunction ()
expressionFunction ()

// Task 2 — Callback Function (Salary Calculation)
// Create a function calculateSalary(salary, callback).
// Requirements:
// Pass the employee's salary and a callback function.
// Create two arrow functions: addBonus and deductSalary.
// addBonus should add ₹5,000.
// deductSalary should subtract ₹2,000.
// Call calculateSalary() with both callbacks.

const singleFunction = (call) =>{
   call(10000, 5000, 1000)
}
const callbackFunction = (employeeSalary, employeeBonous, afterExpenses) => {

    console.log(`Total Salary = ${employeeSalary}`);
    
     total = employeeSalary + employeeBonous

    console.log(`Total Salary After Bonous = ${total}`);

    total = total - afterExpenses

    console.log(`After Expenses = ${total}`);

}
singleFunction(callbackFunction)

// Task 3 — Promise (Student Result Checking)
// Create a function checkResult(mark) that returns a Promise.
// Requirements:
// Accept a student's mark as a parameter.
// Use new Promise() with resolve and reject.
// If the mark is 35 or above, resolve with "Student Passed".
// Otherwise, reject with "Student Failed".
// Add a 2-second delay using setTimeout().
// Handle the result using .then() and .catch().
let checkMark =  (mark) =>{
const promiseFunction = new Promise((resolve, reject)=>{
    

   setTimeout(()=>{
     if (mark>=35){
        resolve("your are passed");
        
    }else
        reject("Your are failed");
    
   },2000)
})
return promiseFunction;
}

checkMark(9)
.then((result)=>{
    console.log(result);
    
})
.catch((result) =>{
    console.log(result);
    
})