import React from 'react'

const Falsy = () => {

  let falsy = true;
  return (
    <>
    <div className='p-8 flex flex-col gap-4'>
      <h1><strong>Title: Product Availability</strong></h1>

      {falsy? "Product Available" :  "Product Unavailable"}
    </div>


    </>
    
  )
}

export default Falsy
