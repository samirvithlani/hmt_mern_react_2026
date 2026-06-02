import React from 'react'
import { useParams } from 'react-router-dom'

export const StudentDetail = () => {
    //url id-->
    const id = useParams().id;
     var studentList =[
        {id:1,name:"amit",age:23,pers:86,rollno:12},
        {id:2,name:"raj",age:23,pers:89,rollno:19},
        {id:3,name:"parth",age:23,pers:77,rollno:1},
        {id:4,name:"jay",age:23,pers:71,rollno:13},
    ]
    const foundStudent = studentList.find((stu)=>stu.id == id)
  return (
    <div style={{textAlign:"center"}}>
        <h1>StudentDetail -{id}</h1>
        <h2>Name = {foundStudent.name}</h2>
        <h3>AGe = {foundStudent.age} Pers = {foundStudent.pers}</h3>
    </div>
  )
}
