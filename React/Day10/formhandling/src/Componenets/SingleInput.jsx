import React, { useState } from 'react'

const SingleInput = () => {

    const [showName, setName] = useState("")
    const [dataShow, setData] = useState([])


    const showData = (e) =>{
        setName(e.target.value)
        
        
        
    }

    const data = (e) =>{
        e.preventDefault();

        const datas = {Name:showName}
        let copy = [...dataShow]
        copy.push(datas)

        setData(copy)

        setName("")

        
       

        

    }

  return (
    <>

    <form>
        <input type="text" placeholder='ENter the Student Name'value={showName} onChange={showData} />
        <button onClick={data}>Submit</button>

        {
            dataShow.map((e,i)=>(
                <h1 key={i}>{e.Name}</h1>
            ))
        }
    </form>
    </>
  )
}

export default SingleInput
