import NavNar from "./Components/NavNar"
import Login from"./Components/Login"
import Dashboard from "./Components/Dashboard"
import Register from "./Components/Register"
import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <>
    <NavNar />

    <Routes>
      <Route  path="/dashboard" element={<Dashboard/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/" element={<Register/>} />
    </Routes>

    </>
  )
}

export default App
