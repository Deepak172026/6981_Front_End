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

let line2= ""
let c=1
while(c<=20){
    line2+=c+ "+ "
    c++

}
console.log(line2);
