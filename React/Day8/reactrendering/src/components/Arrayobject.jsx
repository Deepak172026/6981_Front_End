import React from 'react'

const Arrayobject = () => {
    const employees = [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Rahul", salary: 35000 },
  { id: 4, name: "Divya", salary: 40000 }
];
  return (
    <>
    <div>
        <div>
            {employees.map((e,i)=>(
                <div key={i}>
                    <table border="1">
                        <tr>ID</tr>
                        <tr>Name</tr>
                        <tr>Salary</tr>
                    </table>
                    <table>
                        <td>{e.id} </td>
                        <td>{e.name}</td>
                        <td>{e.salary}</td>
                    </table>

                </div>
            ))}
        </div>
    </div>
    
    </>
  )
}

export default Arrayobject
