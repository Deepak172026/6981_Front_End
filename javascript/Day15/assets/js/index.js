let array = [];

const formDatas = document.getElementById("form")

const showingData = () =>{
    const tableData = document.getElementById("tableRow")


    let newArray = "";

    array.forEach((e,i) =>{
        
        newArray += `<tr>
            <td>${i+1}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.salary}</td>
        </tr>`
    })
    tableData.innerHTML = newArray;

    


}

formDatas.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userid = document.getElementById("id")
    const username = document.getElementById("name")
    const userage = document.getElementById("age")
    const usersalary = document.getElementById("salary")

    if( !userid.value || !username.value || !userage.value || !usersalary.value){
        alert("Please fill the details")
        return;
    }

    const newObj = {
        userid :Date.now(),
        name: username.value,
        age: userage.value,
        salary: usersalary.value
    };


    
    array.push(newObj);
    alert("succesfully submited");
    formDatas.reset()

    console.log(array);

    showingData()
    


})