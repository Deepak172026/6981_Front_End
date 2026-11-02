import React from 'react'

const Students = ({datas}) => {
  return (
  <>
   <h1>Students Details</h1>

  {
    datas.map((e,i) =>(
        <div key={i}>
            <p>Name:{e.Name}</p>
            <p>Name:{e.Age}</p>
            <p>Name:{e.Course}</p>
        </div>

    ))
    
  }
  </>
  )
}

export default Students
