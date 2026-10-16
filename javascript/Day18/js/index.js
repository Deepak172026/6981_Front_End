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

const salaryFunction = (salary,salaryBonous)=>{


    const salary1Function  = (debutSalary) =>{
        
        console.log(salary);
        console.log(salaryBonous);
        
        
        let total;
        total = salary + salaryBonous;

        console.log(`Total Salary = ${total}`);
        
        total = total - debutSalary;
        console.log(`After Expenses = ${total}`);
       
    }
    salary1Function(1000);
}
salaryFunction(10000, 5000)

