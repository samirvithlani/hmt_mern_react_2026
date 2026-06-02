import React from 'react'
import { useParams } from 'react-router-dom'

export const StudentResult = () => {
    const id = useParams().id;

      var studentList =[
        {id:1,name:"amit",makrs:[{maths:78,science:87,Eng:71}]},
        {id:2,name:"raj",makrs:[{maths:87,science:91,Eng:81}]},
        {id:3,name:"parth",makrs:[{maths:80,science:70,Eng:66}]},
        {id:4,name:"jaya",makrs:[{maths:65,science:80,Eng:60}]},
    ]
    //{id:1,name:"amit",makrs:[{maths:78,science:87,Eng:71}]},
    const foundStudent = studentList.find((stu)=>stu.id == id)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student Result {id}</h1>
        <h2>Name = {foundStudent.name}</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Maths</th>
                    <th>Sci</th>
                    <th>Eng</th>
                    <th>Total</th>
                    <th>Pers</th>
                </tr>
            </thead>
            <tbody>
                {
                    foundStudent.makrs.map((ms)=>{
                        return<tr>
                            <td>{ms.maths}</td>
                            <td>{ms.science}</td>
                            <td>{ms.Eng}</td>
                            <td>
                                {
                                    ms.maths + ms.science + ms.Eng
                                }
                            </td>
                            <td>
                                {
                                    (ms.maths + ms.science + ms.Eng) / 3
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
