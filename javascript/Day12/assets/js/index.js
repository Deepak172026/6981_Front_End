// TASK 1 – CHANGE HEADING TEXT
// ----------------------------------------
// Create an HTML page with:
// <h1 id="title">Hello World</h1>
// Using JavaScript:
// 1. Select the heading using getElementById().
// 2. Change the text to "Welcome to JavaScript".
// 3. Change the text color to blue.
// 4. Change the font size to 30px.


const title = document.getElementById("h1")
console.log(title.textContent);
title.textContent = "welcome to dom"
title.style.color = "blue";
title.style.fontSize = "20px"


//  TASK 2 – CHANGE PARAGRAPH STYLES
// ----------------------------------------
// Create three paragraphs with the same class name.
// Using JavaScript:
// 1. Select them using getElementsByClassName().
// 2. Change the first paragraph color to red.
// 3. Change the second paragraph background to yellow.
// 4. Change the third paragraph font size to 25px.

const claassResult = document.getElementsByClassName("para")
console.log(claassResult);
claassResult[0].style.color = "red"
claassResult[1].style.backgroundColor = "yellow"
claassResult[2].style.fontSize = "25px"



// TASK 3 – UPDATE IMAGE AND LINK
// ----------------------------------------
// Create:
// 1. One image with an ID.
// 2. One anchor tag with an ID.
// Using JavaScript:
// 1. Select the image using querySelector().
// 2. Change the image src property.
// 3. Change the image width to 200px.
// 4. Select the anchor tag
// 5. Change its href to https://www.google.com.
// 6. Change its text to "Visit Google".

const queryResult = document.querySelector("#image")

queryResult.src = "../assets/images/OIP.jpeg"
queryResult.style.width = "200px"

const ancclassResult = document.querySelector("#annclass")
ancclassResult.href = 'https://in.images.search.yahoo.com/search/images;_ylt=A2RTN4a7XMhqFgMA8ta7HAx.;_ylu=Y29sbwNhcC1zb3V0aGVhc3QtMQRwb3MDMgR2dGlkAwRzZWMDc3I-?type=E210IN1589G0&p=images&fr=mcafee&imgurl=https%3A%2F%2Fwww.bing.com%2Fimages%2Fsearch%3Fview%3DdetailV2%26ccid%3DN4WwZcK2%26id%3D18525E6D304077FEF76B55B5A9611AA5E09D3037%26thid%3DOIP.N4WwZcK2IZnFZo0zrPND1AHaLH%26mediaurl%3Dhttps%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F09%2F22%2F03%2F51%2Fbeautiful-8267949_1280.jpg%26exph%3D1280%26expw%3D853%26q%3Dimages%26ck%3D9CC5FC3530DEC16F26CF4210E4A0D08D%26idpp%3Drc%26idpview%3Dsingleimage%26form%3Drc2idp&name=images2&turl=https%3A%2F%2Fsp.yimg.com%2Fib%2Fth%2Fid%2FOIP.N4WwZcK2IZnFZo0zrPND1AHaLH%3Fpid%3DApi%26w%3D148%26h%3D148%26c%3D7%26dpr%3D2%26rs%3D1&tt=images2&sigit=CbsTUberF80U&sigi=kfQIu_TAXzth&sign=YvsZng_eZx0D&sigt=YvsZng_eZx0D'
ancclassResult.textContent = "visit google"

