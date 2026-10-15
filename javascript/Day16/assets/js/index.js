 const form =  document.getElementById("form")
const tableData = document.getElementById("tableRow")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
   
     const username = document.getElementById("name")
     const userage= document.getElementById("age")
     const userpassword = document.getElementById("salary")

     const name = username.value
     const age =  userage.value
     const password = userpassword.value

     if(!name || !age || !password ){
        alert("please fill the Required details")
        return;
     }
     let obj =  {name,age,password}
     const data = JSON.parse(localStorage.getItem("form")) || []
     data.push(obj);
     localStorage.setItem("form",JSON.stringify(data))
     alert("succesfully register")
     form.reset();

})