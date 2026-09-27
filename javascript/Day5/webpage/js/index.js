// Create two variables:

// a = 20

// b = 10

// Find and print:

// Addition

// Subtraction

// Multiplication

// Division

// Remainder

let a = 20
let b = 10
let total
console.log("total = "  , a+b );
console.log("total = "  , a-b );
console.log("total = "  , a*b );
console.log("total = "  , a/b );
console.log("total = "  , a%b );

// TASK 2 – EVEN OR ODD
// --------------------
// Create:
// number = 15
// Check whether the number is:
// Even
// or
// Odd
// Hint:
// Use % and if/else.
// =================

const number = 15
if(number % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("odd Number");
}

// TASK 3 – POSITIVE, NEGATIVE OR ZERO
// -----------------------------------
// Create a number.
// Check:
// If number > 0
// → Print "Positive"
// If number < 0
// → Print "Negative"
// Otherwise
// → Print "Zero"

const value = 15
if( value >0){
    console.log("positive");
}
else if (avlue < 0){
    console.log("Negative");
}
else{
    console.log("zero");
}

// TASK 4 – VOTING ELIGIBILITY
// ---------------------------
// Create:
// age = 20
// If age is 18 or above:
// Print "Eligible to Vote"
// Otherwise:
// Print "Not Eligible to Vote"

let age = 20
if(age>18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

// TASK 5 – LARGEST OF TWO NUMBERS
// -------------------------------
// Create:
// a = 40
// b = 25
// Compare both numbers and print the larger number.
// Example Output:
// 40 is Largest

let c = 40
let d = 25
if(c>d){
    console.log("40 is Greater");
}
else {
    console.log("25 is Greater");   
}

// TASK 6 – STUDENT GRADE
// ----------------------
// Create:
// mark = 78
// Check:
// 90 or above
// → Grade A
// 75 or above
// → Grade B
// 50 or above
// → Grade C
// Below 50
// → Fail

const mark = 78
if(mark>=90){
    console.log("A Grade");
}
else if (mark>=75){
    console.log("B Grade");
}
else if (mark>=50){
    console.log("C Grade");
}
else{
    console.log("Fail");
}

// TASK 7 – PRINT 1 TO 20
// ----------------------
// Using a for loop, print numbers:
// 1 to 20
// Expected:
// 1
// 2
// 3
// ...
// 20

for( let number = 1; number<=20; number++){
    console.log(number);
}

// TASK 8 – PRINT EVEN NUMBERS
// ---------------------------
// Using:
// for loop
// +
// if condition
// Print all even numbers from:
// 1 to 50
// Expected:
// 2
// 4
// 6
// 8
// ...
// 50

for(let g = 1; g<=50; g++){
    if(g%2==0){
        console.log(g);
    }
}

// TASK 9 – MULTIPLICATION TABLE
// -----------------------------
// Create:
// number = 5
// Using a for loop, print the multiplication table
// from 1 to 10.
// Expected:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...
// 5 x 10 = 50

const number1 = 5

for(let number2 = 1; number2<=10; number2++){
    console.log("5 X ", number2 , " =" ,(number1* number2)  );
}

// TASK 10 – SUM OF 1 TO 10
// ------------------------
// Using a for loop, calculate the total of numbers
// from 1 to 10.
// Expected:
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
// Output:
// Total = 55

let total3 = 0;
for(let z=1; z<=10; z++){
    total3+=z
}
console.log("Total Value is" , total3);

