import React from 'react'

const Boolean = () => {
  let payment = false;
  
  return (
    <>
    {payment ? <h3 className='font-bold'>payment Succesfull</h3> : <h3 className='font-bold'>Payment Unsuccessfull</h3>}
    </>
  )
}

export default Boolean
