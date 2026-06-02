import React from 'react'
import { Link } from 'react-router-dom'

export const Students = () => {
    
    var studentList =[
        {id:1,name:"amit"},
        {id:2,name:"raj"},
        {id:3,name:"parth"},
        {id:4,name:"jay"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Students</h1>
        {
            studentList.map((stu)=>{
                return <li>
                    {/* <Link to="/studentdetail">{stu.name}</Link> */}
                    <Link to={`/studentdetail/${stu.id}`}>{stu.name}</Link>
                </li>
            })
        }
    </div>
  )
}
