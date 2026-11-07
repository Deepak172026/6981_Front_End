import { Link } from "react-router-dom"
const NavNar = () => {
  return (
    <>

    <div className="bg-pink-500 p-4 flex justify-between items-center rounded h-20">
        <div className="bg-white w-20 text-center rounded-2xl p-2 ">
            logo
        </div>

        <div className=" flex gap-15 mx-10">
            
            <Link to="/" className="bg-white  text-center rounded-2xl p-2 ">Register</Link>
            <Link to="/login" className="bg-white  text-center rounded-2xl p-2 ">Login</Link>
            <Link to="/dashboard" className="bg-white  text-center rounded-2xl p-2 " >Daashboard</Link>
        </div>
    </div>
    
    </>
  )
}

export default NavNar
