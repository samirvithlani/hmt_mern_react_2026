import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [numbers,setNumbers]= useState([10,20,30])
    const addNumners = ()=>{
        
        const randomNo = Math.floor(Math.random()*100)
        console.log("random no",randomNo)
        var updatednos = [...numbers,randomNo] 
        //[10,20,30,9]
        setNumbers(updatednos) //updated array

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        <button onClick={addNumners}>ADD</button>
        {
            numbers.map((n)=>{
                return <li>{n}</li>
            })
        }
        
    </div>
  )
}
