import React from 'react'

//props property
export const CourseList = (props) => {
    console.log("props courselist",props) //{instituname:"",courses:[].book:{},test:()=>{}}
  return (
    <div>
        <h3>Course List</h3>
        {props.instituteName}
        {
            props.courses.map((c)=>{
                return <li>{c}</li>
            })
        }
        <h1>BookName = {props.book.name}</h1>
        <h2>Duration = {props.book.duration} -days </h2>
        <h3>Price = {props.book.price}</h3>
        <h3>Tilte = {props.title}</h3>
        <button onClick={props.test}>TEST</button>
    </div>
  )
}
