import React from 'react'

const Object = () => {

    const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
    <>
    <p>{student.name}</p>
    <p>{student.age}</p>
    <p>{student.department}</p>
    <p>{student.city}</p>

    </>
  )
}

export default Object
