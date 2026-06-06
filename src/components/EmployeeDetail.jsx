import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const EmployeeDetail = () => {
    //useParams() --> state --->useLocation()
    const state = useLocation().state
    console.log(state)
  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE DETAIL</h1>
        <h1>Id = {state.id}</h1>
        <h1>Name = {state.name}</h1>
        <h3>Age = {state.age}</h3>
    </div>
  )
}
