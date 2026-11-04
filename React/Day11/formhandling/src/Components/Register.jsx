import React, { useEffect, useState } from 'react'

const Register = () => {
    
    const [showName, setShowName] = useState("")
    const [showEmail, setShowEmail] = useState("")
    const [showNumber, setShowNumber] = useState("")

    const [dataShow, setDataShow] = useState([])


    const nameHandling = (e) =>{
        setShowName(e.target.value)

    }
    const emailhandling = (e) =>{
        setShowEmail(e.target.value)
    }
    const numberHandling = (e) =>{
        setShowNumber(e.target.value)
    }

    const  registerHandling = (e) =>{

        e.preventDefault();

        const datas = {showName,showEmail,showNumber}

        const copy = [...dataShow]
        copy.push(datas)

        localStorage.setItem("userData", JSON.stringify(copy)) 

      
        const copyReal = JSON.parse(localStorage.getItem("userData")|| []) 

        setDataShow(copyReal)
 

       alert("Successfully Register")

       setShowName("")
       setShowEmail("")
       setShowNumber("")

       useEffect(()=> {
        const copyReal = JSON.parse(localStorage.getItem("userData")|| []) 
         setDataShow(copyReal)

       }, [registerHandling])



    }


  return (
    <>

    <form >

        <input type="text" placeholder='Enter the Name' value={showName} onChange={nameHandling} />
        <input type="email" placeholder='Enter the Email' value={showEmail} onChange={emailhandling}/>
        <input type="Number" placeholder='Enter the Number'value={showNumber} onChange={numberHandling}/>

          <button onClick={registerHandling}>Register</button>
    </form>

    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataShow.map((e,i) => (
                        <tr key={i}>
                            <td>{e.showName}</td>
                            <td>{e.showEmail}</td>
                            <td>{e.showNumber}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Register
