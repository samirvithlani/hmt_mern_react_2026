import React from 'react'

//props property
export const CourseList = (props) => {
    console.log("props courselist",props) //{instituname:"",courses:[]}
  return (
    <div>
        <h3>Course List</h3>
        {props.instituteName}
        {
            props.courses.map((c)=>{
                return <li>{c}</li>
            })
        }
    </div>
  )
}
