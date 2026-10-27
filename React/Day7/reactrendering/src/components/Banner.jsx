import { Link } from "react-router-dom"
const Banner = () => {
  return (
   <>
   <div className="bg-amber-100 flex justify-between  p-3 items-center h-20 ">
    <Link to="/number" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> Number Rendering</Link>
    <Link to="/string"className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> String Rendering</Link>
    <Link to="/boolean"className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> boolean Rendering</Link>
    <Link to="/falsy" className="bg-white p-3 rounded-2xl h-10 flex justify-center items-center"> Falsy Rendering</Link>
   </div>
   </>
  )
}

export default Banner
