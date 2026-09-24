// TASK 1 – POSITIVE NUMBER
// ------------------------
// Create a variable:
// number = 10
// Using if condition, check whether the number
// is greater than 0.
// If true, print:
// "Positive Number"

let num = 10
if(num>0){
    console.log("Positive Number");
}

// TASK 2 – VOTING ELIGIBILITY

// ---------------------------

// Create:
// age = 20
// Using if else:
// If age is greater than or equal to 18,
// print:
// "Eligible to Vote"
// Otherwise print:
// "Not Eligible to Vote"

let age = 14
if (age>=18){
    console.log("Eligible to vote");
    
}
else{
    console.log("Not Eligible");
    
}

// TASK 3 – STUDENT GRADE

// ----------------------
// Create:
// mark = 75
// Using if, else if and else:
// 90 or above
// → "Grade A"
// 60 or above
// → "Grade B"
// Below 60
// → "Grade C"

let mark  = 75
if(mark>=90){
     console.log("Grade A");
}
   
else if(mark>=60){
    console.log("Grade B");
    
}
else {
    console.log("Grade C");
    
}

// TASK 4 – PRINT 1 TO 10
// ----------------------
// Using a for loop, print numbers from:
// 1 to 10
// Expected Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

for(let a=1; a<=10; a++ ){
    console.log(a);
    
}

// TASK 5 – PRINT EVEN NUMBERS
// ---------------------------
// Using a for loop and if condition,
// print only even numbers from 1 to 20.
// Hint:
// Use:
// %
// Expected Output:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20

for(let a =1; a<=20; a++){
    if(a%2 == 0){
        console.log(a);
    }
}

