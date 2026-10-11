
// TASK 1 – EVEN OR ODD
// --------------------
// Create a function:
// checkEvenOdd(number)
// Pass one number as an argument.
// If the number is divisible by 2:
// → Return "Even Number"
// Otherwise:
// → Return "Odd Number"
// Example:
// checkEvenOdd(10)
// Output:
// Even Number

const functionResult1 = (a) =>{
    if(a%2==0){
        console.log("This is Even");
    }
    else{
        console.log("THis is odd");
    }
}
functionResult1(20)

// TASK 2 – LARGEST OF TWO NUMBERS
// --------------------------------
// Create a function:
// findLargest(a, b)
// Pass two numbers as arguments.
// Compare both numbers and return the largest number.
// Example:
// findLargest(25, 40)
// Output:
// 40

const functionResult2 = (a,b) => {
    if(a>b){
        console.log(`${a} is greater `);
        
    }else{
        console.log(`${b} is greater `);
        
    }
}
functionResult2(28,40)

// TASK 3 – VOTING ELIGIBILITY
// ----------------------------
// Create a function:
// checkVote(age)
// Pass age as an argument.
// If age is 18 or above.
// → Return "Eligible toVote"
// Otherwise:
// → Return "Not Eligible to Vote"
// Example:
// checkVote(20)
// Output:
// Eligible to Vote

const functionResult3 = (a) =>{
    if(a>=18){
        console.log(`Your are eligible for vote`);
        
    }
    else{
        console.log(`Your are not eligible for vote`);
    }
} 
functionResult3(29)

// TASK 4 – SUM OF ARRAY
// ---------------------
// Create a function:
// getTotal(numbers)
// Given:
// [10, 20, 30, 40, 50]
// Use a for loop inside the function.
// Add all the numbers and return the total.
// Expected Output:
// 150

const functionResult4 = () => {
    let number = [10,20,30,40,50];
     let total = 0;
    for(let a = 0; a<number.length; a++){
       
        total = number[a] +total;
    }
    console.log(total);
    
}
functionResult4()

// TASK 5 – COUNT EVEN NUMBERS
// ---------------------------
// Create a function:
// countEven(numbers)
// Given:
// [10, 15, 20, 25, 30, 35, 40]
// Use:
// Function
// For Loop
// If Condition
// % Operator
// Count how many even numbers are available
// in the array.
// Expected Output:
// 4

const resultFunction5 = (number1) =>{
    let count = 0
    for (let b=0; b<number1.length; b++){
        if(number1[b]%2 == 0){
            count++
            
        }
    }
    console.log(count);
    
}
resultFunction5([10, 15, 20, 25, 30, 35, 40, 50])