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
// TASK 3 – SHOW AND HIDE
// ----------------------------------------
// Create:
// 1. One paragraph.
// 2. One Hide button.
// 3. One Show button.
// Requirements:
// 1. Initially, paragraph should be visible.
// 2. Click Hide → Paragraph disappears.
// 3. Click Show → Paragraph appears.
// 4. Use style.display = "none".
// 5. Use style.display = "block".

let paragraph = document.getElementById("para");
let hideBtn = document.getElementById("hide")
let showBtn = document.getElementById("show")

hideBtn.addEventListener("click", () =>{
    paragraph.style.display = "none"
})


showBtn.addEventListener("click", () =>{
    paragraph.style.display = "block"
})

// TASK 4 – TOGGLE SHOW / HIDE
// ----------------------------------------
// Create:
// 1. One heading.
// 2. One Toggle button.
// Requirements:
// 1. Initially, heading should be visible.
// 2. First click → Hide heading.
// 3. Second click → Show heading.
// 4. Third click → Hide heading.
// 5. Use addEventListener() and if/else.

let heading1 = document.querySelector("#head1")
let hidebtn1 = document.querySelector("#hide1")

hidebtn1.addEventListener("click", () =>{
    if(heading1.style.display === "block"){
        hidebtn1.textContent = "show"
        heading1.style.display = "none"

    }else{
        hidebtn1.textContent = "hide"
        heading1.style.display = "block"
    }
})

