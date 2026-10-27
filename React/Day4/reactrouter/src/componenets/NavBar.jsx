import logo from "../assets/images/logo.png"
import banner from "../assets/images/banner.png"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <> 
    <div className="bg-slate-900 flex justify-between items-center h-25 p-2">
         <div className="w-24 h-20 bg-white rounded-4xl flex justify-items-center align-center">
            <img src={logo} />
        </div>
        <div className="text-white flex gap-7 p-3 mr-5 ">
            <Link to="/">Home</Link>
            <Link to="/Ai">Artificial Intelligence</Link> {"|"}
            <Link to="/Ml">Machine Learning</Link>
            <Link to="/Real_worldAi">Real World</Link>
            <Link to="/Future">Future of AI</Link>
        </div>
        
    </div>
    <div className="h-100">
      <img src={banner} />
    </div>
    </>
  )
}

export default NavBar
