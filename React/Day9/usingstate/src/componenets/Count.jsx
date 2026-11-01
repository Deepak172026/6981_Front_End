import { useState } from "react"

const Count = () => {
    const [count,setCount] = useState(0)

    const incrementHandling = () =>{
        setCount(count+1)
    }
    const decrementHandling =() =>{
        setCount(count-1)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={incrementHandling}>Increment</button>
    <button onClick={decrementHandling}>Decrement</button>

    </>
  )
}

export default Count
