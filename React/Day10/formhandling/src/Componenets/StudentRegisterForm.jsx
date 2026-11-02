import React, { use, useState } from 'react'

const StudentRegisterForm = () => {

    const [showName, setShowName] = useState("")
    const [showEmail, setShowEmail] = useState("")
    const [showAge, setShowAge] = useState("")
    const [showData, setShowData] = useState([])

    const nameChange = (e) =>{
        setShowName(e.target.value);
        
    }
    const emailChange = (e) =>{
        setShowEmail(e.target.value);
    }
    const ageChange = (e) =>{
        setShowAge(e.target.value);
    }

    const dataHandling = (e) =>{
        e.preventDefault();

        let datas = {Name:showName, Email:showEmail, Age:showAge}
        let copy = [...showData]
        copy.push(datas)



        setShowData(copy)


    }


  return (
    <>

    <form action="">

        <input type="text"  onChange={nameChange} />
        <input type="email" onChange={emailChange} />
        <input type="number" onChange={ageChange} />

        <button onClick={dataHandling}>submit</button>
    </form>

    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                { showData.map((e,i)=>(
                    <tr key={i}>
                        <td>{e.Name}</td>
                        <td>{e.Email}</td>
                        <td>{e.Age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default StudentRegisterForm
