import React, { useState } from 'react'

const String = () => {


    const [Name, setName] = useState("Arun")
    const textChange = ()=>{
        setName("Kumar")
    }


  return (
    <>

    <h1>{Name}</h1>
    <button onClick={textChange}>Click to Change</button>


    
    </>
  )
}

export default String
