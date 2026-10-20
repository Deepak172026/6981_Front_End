const form =  document.getElementById("form")

const loginForm = ( (event)=>{
    event.preventDefault();

    const userName =  document.getElementById("name")
    const userEmail = document.getElementById("email")
    const userPassword = document.getElementById("password")

    const name = userName.value;
    const email = userEmail.value;
    const password = userPassword.value;

    if(!name || !email  || !password){
        alert("Enter the Details")
        return
    }

    const obj = {name,email,password}
    
    

    const datas = JSON.parse(localStorage.getItem("register")) || []

    datas.push(obj)

    localStorage.setItem("register", JSON.stringify(datas))

    alert("sucessfully Register")

    form.reset();

    document.location.href = "login.html"


})

const login = (event) => {

    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail")
    const loginPassword = document.getElementById("loginPassword")

    const email1 = loginEmail.value;
    const password = loginPassword.value;

    const datas = JSON.parse(localStorage.getItem("register")) || []

    const findData =  datas.find((e)=>{
       return  e.email == email1 
        
    })
    if(findData.email == email1 && findData.password == password ){
        document.location.href = "dashboard.html"
    }else{
        alert("Enter the wrong details plese check")
    }



}