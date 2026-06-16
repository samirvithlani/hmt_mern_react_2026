import React, { useState } from 'react'

export const InputDemo2 = () => {

    const[country,setCountry] =useState("")
    const countries = ["india","china","russia"]

    const countryHandler = (event)=>{
        console.log(event.target.value)
        setCountry(event.target.value)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 2</h1>
        <select onChange={(event)=>{countryHandler(event)}}>
            <option disabled>SELECT COUNTRY</option>
            {
                countries.map((c)=>{
                    return <option value={c}>{c.toUpperCase()}</option>
                })
            }
            {/* <option value="india">India</option>
            <option value="china">China</option>
            <option value="russia">Russia</option> */}
        </select>
        {country}
    </div>
  )
}
