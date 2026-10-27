import Banner from "./components/Banner"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Boolean from "./pages/Boolean"
import Falsy from "./pages/Falsy"
import Numberrendering from "./pages/Numberrendering"
import Stringrendering from "./pages/Stringrendering"
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
    <NavBar />
    <Banner />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/number" element={<Numberrendering />}/>
      <Route path="/string" element={<Stringrendering />}/>
      <Route path="/boolean" element={<Boolean />}/>
      <Route path="/falsy" element={<Falsy />}/>
    </Routes>
    </>
    
  )
}

export default App
