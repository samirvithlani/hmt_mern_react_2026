import React, { useState } from 'react'
import { CourseList } from './CourseList'

export const Course = () => {

    const[title,setTitle] =useState("INDIA")

    var instituteName = "IIT"
    var courses = ["java","php","js"]
    var book = {
      name:"java",
      duration:45,
      price:1200
    }

    const test = ()=>{
      alert("test called...")
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>COURSE</h1>
        <CourseList title = {title} instituteName={instituteName} courses = {courses} book={book} test={test}></CourseList>
    </div>
  )
}
