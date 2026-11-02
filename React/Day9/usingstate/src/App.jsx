import React from 'react'
import String from './componenets/String'
import Count from './componenets/Count'
import Students from './componenets/Students'
const App = () => {

  const obj = [{Name: "Deepak", Age:20, Course:"BCA"} ,{Name: "Mahesh", Age:22, Course:"BCA"}, {Name: "Samuvel Sherbin", Age:21, Course:"BCA"}]
  return (
    <>

    <String />
    <Count  />

    <Students datas={obj} />
   
    </>
  )
}

export default App
