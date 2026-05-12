import React from 'react'

export const MapDemo3 = () => {
    var students =[
        {id:1,name:"vijay",marks:23},
        {id:2,name:"sanjay",marks:24},
        {id:3,name:"ajay",marks:21}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table align='center' border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((stu)=>{
                         return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.marks}</td>
                         </tr>   
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
