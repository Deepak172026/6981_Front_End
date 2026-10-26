import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <>
    <div className=bg-slate-900">
    <div className="w-24">
            <img src={logo} />
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/Ai">Understanding Artificial Intelligence</Link>
            <Link to="/Ml">Machine Learning and Modern AI</Link>
            <Link to="/Real_worldAi">AI in the Real World</Link>
            <Link to="/Future">The Future of Artificial Intelligence</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
