// TASK 1 – CHANGE HEADING COLOR
// ----------------------------------------
// Create:
// 1. One h1 heading.
// 2. One button.
// Requirements:
// 1. Initially, heading color should be black.
// 2. When the button is clicked, change color to red.
// 3. Change heading font size to 30px.
// 4. Use addEventListener("click").

let headingResult = document.querySelector("#heading")
let btnResult = document.querySelector("#btn")


btnResult.addEventListener("click", ()=>{
    headingResult.textContent = "THis is updated Javascript"
    headingResult.style.color = "red"
    headingResult.style.fontSize = "20px"
})


// TASK 2 – CHANGE BOX BACKGROUND
// ----------------------------------------
// Create:
// 1. One div box.
// 2. Two buttons.
// Requirements:
// 1. Initially, box background should be white.
// 2. Click Button 1 → Background becomes blue.
// 3. Click Button 2 → Background becomes yellow.
// 4. Change text color to white for blue background.
// 5. Use style.backgroundColor and style.color.

let box1 = document.querySelector("#box")
let button1  = document.querySelector("#firstbtn")
let button2  = document.querySelector("#secondbtn")

button1.addEventListener("click", ()=>{
    box1.style.padding = "10px"
    box1.style.width = "100px"
    box1.style.borderRadius = "5px"
    box1.style.textAlign = "center";
    box1.style.backgroundColor = "blue"
})
button2.addEventListener("click", ()=>{
    box1.style.padding = "10px"
    box1.style.width = "100px"
    box1.style.borderRadius = "5px"
    box1.style.textAlign = "center";
    box1.style.backgroundColor = "pink"
})