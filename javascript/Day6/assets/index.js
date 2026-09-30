// LOOP ONLY – 5 SIMPLE TASKS
// TASK 1 – Print Multiples of 5
// Using a loop, print:
// 5 10 15 20 25 30 35 40 45 50
let number=5
let total

for(let i=1; i<=10; i++){
    total= (number*i)
    console.log(total);
}

// TASK 2 – Print Numbers by 2
// Using a loop, print:
// 2 4 6 8 10 12 14 16 18 20
// Do this by changing the loop value by 2 each time.

let line =""
let b=1;    
while(b<=20){
    if(b%2==0){
        line+=b+ " "
    }
    
    b++
}
console.log(line);

// TASK 3 – Find Sum from 1 to 20
// Using a loop, calculate:
// 1 + 2 + 3 + ... + 20

let sum  = 0;
for(let c=1; c<=20; c++){
    sum +=c
    console.log(sum);
}


// TASK 4 – Print Squares
// Using a loop, print the square of numbers from 1 to 10.
// Expected:
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81
// 100

let total3
for(let c=1; c<=10; c++){
    total3 = c*c
    console.log(total3);
}

// TASK 5 – Countdown
// Using a loop, print numbers from 50 to 0, decreasing by 5.
// Expected:
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
// 0

let total4
for(let d=10; d>=0; d--){
    total4 = (d * 5)
    console.log(total4);
    
}


