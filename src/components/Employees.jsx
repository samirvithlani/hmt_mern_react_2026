import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Employees = () => {
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <Link to="/employeedetail" state={{id:1,name:"amit",age:23}}>detail</Link>  
    </div>
  )
}
