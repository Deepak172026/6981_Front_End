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