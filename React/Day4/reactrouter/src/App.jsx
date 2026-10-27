import NavBar from "./componenets/NavBar"
import Ai from "./pages/Ai"
import Future from "./pages/Future"
import Home from "./pages/Home"
import Ml from "./pages/Ml"
import Real_wordAi from "./pages/Real_wordAi"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
    <NavBar />

    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/Future" element={<Future />}/>
      <Route  path="/Ai" element={<Ai />}/>
      <Route  path="/Ml" element={<Ml />}/>
      <Route  path="/Real_worldAi" element={<Real_wordAi />}/>
    </Routes>
    <Home />
    </>
  )
}

export default App
