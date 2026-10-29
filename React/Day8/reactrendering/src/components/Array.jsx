import React from 'react'

const Array = () => {
    const  arr =["HTML", "CSS", "JavaScript", "React", "Python"];
  return (
    <>
    <div>
        <ul className='p-5'>{arr.map((e,i)=>(
            <div key={i}>
                <li >{e}</li>
            </div>
        ))}</ul>
    </div>

    </>
    
  )
}

export default Array
