import Array from "./components/Array";
import Object from "./components/Object";
import Arrayobject from "./components/Arrayobject";
import React from 'react'
import Props from "./components/Props";

const App = () => {

      const employees = [
  { id: 1, course: "HTML", Prize: 25000 },
  { id: 2, course: "CSS", Prize: 30000 },
  { id: 3, course: "JS", Prize: 35000 },
  { id: 4, course: "NODE", Prize: 40000 },

];
  return (
    <>
   <Props  data = {employees}/>
    </>
  )
}

export default App
