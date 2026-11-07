import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Register = () => {

  const [showName, setShowName]  = useState("")
  const [showEmail, setShowEmail]  = useState("")
  const [showNumber, setShowNumber]  = useState("")

  const [showError, setShowError] = useState("")

  const navigate = useNavigate();



  const handlingName = (e) =>{
    setShowName(e.target.value)
  }
   const handlingEmail = (e) =>{
    setShowEmail(e.target.value)
  }
   const handlingNumber = (e) =>{
    setShowNumber(e.target.value)
  }

  const hadnlingBtn = (e) =>{

      e.preventDefault();

      if(!showName || !showEmail || !showNumber){
        setShowError("Please fill the form")
        return
      }

      const dataEmail = JSON.parse(localStorage.getItem("firstData"))

      const checkEmail = dataEmail.find((e)=> e.showEmail == showEmail)
      if(checkEmail){
        setShowError("You already have account")
        return
      }


      
      let obj = {id:Date.now(),showName, showEmail, showNumber }
      
      const datas = JSON.parse(localStorage.getItem("firstData")) || []
       datas.push(obj)
       localStorage.setItem("firstData" ,JSON.stringify(datas))

      setShowName("")
      setShowEmail("")
      setShowNumber("")

      
      setShowError("Succesfully Register please wait")

      setTimeout(()=>{navigate("/login")},2000)
      



  }
  




  return (
    <>

    <form  >
      <div className="bg-white shadow flex  flex-col justify-center items-center p-5 gap-8" >
        <div>
          <h1 className="mr-5 text-3xl ">Welcome to Our page</h1>
          <p className="mr-5 text-2xl">Please Register</p>

          <p className=" text-pink-600">{showError}</p>
        </div>
         <div>
             <input type="text" placeholder="Enter the Name" value={showName} className="  rounded  w-60 shadow-2xl border " onChange={handlingName}  />
          </div>
            <div>
               <input type="email" placeholder="Enter the Email"   value={showEmail} className=" border rounded  w-60 shadow-2xl " onChange={handlingEmail} />
           </div>
            <div>
               <input type="Number" placeholder="Enter the Number" value={showNumber} className=" border rounded  shadow-pink-400 w-60 shadow-2xl " onChange={handlingNumber} />
           </div>
            <div>
               <button className=" bg-pink-500 p-2 rounded-2xl w-30 flex  justify-center items-center" onClick={hadnlingBtn}>Register</button>
           </div>
      </div>

    
       

    </form>
    
    </>
  )
}

export default Register
