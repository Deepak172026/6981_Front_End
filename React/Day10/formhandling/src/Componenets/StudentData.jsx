import React, { useState } from 'react'

const StudentData = () => {

    const [showName, setShowName] = useState("")
    const [showEmail, setShowEmail] = useState("")
    const [showCourse, setShowCourse] = useState("")
    const [dataShow, setDataShow] = useState([])
    

    const nameHandling = (e) =>{
        setShowName(e.target.value)
    }
     const emailHandling = (e) =>{
        setShowEmail(e.target.value)
    }
     const courseHandling = (e) =>{
        setShowCourse(e.target.value)
    }

    const showDatabtn = (e) =>{
        e.preventDefault()

        if(!showName || !showEmail || !showCourse){
            alert("Please fill the Details")
        }

        const datas = {Name:showName, Email:showEmail, Age:showCourse}

        let copy = [...dataShow]
        copy.push(datas)

        setDataShow(copy)
        alert("Register Succesfully")

        setShowName("")
        setShowEmail("")
        setShowCourse("")



    }


  return (
    <>

    <div>
        <form action="">

            <input type="text" placeholder='Enter the Name' value={showName} onChange={nameHandling}/>
            <input type="email" placeholder='Enter the Eamil'value={showEmail} onChange={emailHandling}/>
            <input type="text" placeholder='ENter the Course' value={showCourse} onChange={courseHandling}/>

            <button onClick={showDatabtn}>Submit</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataShow.map((e,i) => (
                        <tr key={i}>
                            <td>{e.Name}</td>
                            <td>{e.Email}</td>
                            <td>{e.Course}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>
    </>
  )
}

export default StudentData
