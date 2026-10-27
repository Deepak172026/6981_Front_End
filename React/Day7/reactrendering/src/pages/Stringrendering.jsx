import React from 'react'

const Stringrendering = () => {

  let title = "The World of Technology:"
  let description = "Technology makes our lives easier and faster. It helps us communicate, learn, work, and solve problems. Computers, smartphones, and artificial intelligence are some examples of modern technology."
  let conclustion = "Conclusion:"
  let descriptionc = "Technology continues to change the world and plays an important role in shaping our future."

  return (
    <>
    <div className='p-5 flex flex-col gap-3'>
      <h1 className='font-bold'>{title}</h1>
      <p className='mx-10'>{description}</p>
      <h1 className='font-bold'>{conclustion}</h1>
      <p className='mx-10'>{descriptionc}</p>
    </div>
    

    </>
    
  )
}

export default Stringrendering
