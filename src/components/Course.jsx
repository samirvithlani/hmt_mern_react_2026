import React from 'react'
import { CourseList } from './CourseList'

export const Course = () => {

    var instituteName = "IIT"
    var courses = ["java","php","js"]

  return (
    <div style={{textAlign:"center"}}>
        <h1>COURSE</h1>
        <CourseList instituteName={instituteName} courses = {courses}></CourseList>
    </div>
  )
}
