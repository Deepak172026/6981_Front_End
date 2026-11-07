import { useEffect, useState } from "react"

const Dashboard = () => {

  const [showData, setShowData] = useState({})
 

  useEffect(()=> {

    const datas = JSON.parse(localStorage.getItem("isActive"))
    setShowData(datas)

  }, [])

  

  return (
    <>
    <div className=" flex  h-162 flex-col  p-10 gap-5 bg-pink-400 ">
      <div className="bg-white p-2  w-60 flex items-center justify-center rounded-2xl">
          <h1>Welcome to Your Dashboard</h1>
      </div>
      <div className="mx-15 flex flex-col gap-2 bg-white w-50 p-3 rounded-2xl">
        <h1>{showData.showName}</h1>
        <p>{showData.showEmail}</p>
        
      </div>
      <button className="bg-white p-2 w-30 mx-25 rounded-2xl" >change Coor</button> 
    </div>
    
    </>
  )
}

export default Dashboard
