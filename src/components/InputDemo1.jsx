import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [name,setName] = useState("")
    const [age, setage] = useState("")
    const [isCliked, setisCliked] = useState(false)

    const nameHandler = (event)=>{
     //   console.log(event)
        //console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        setage(event.target.value)
    }
    const clickHandler = ()=>{
        setisCliked(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            
        </div>
        <div>
            <button onClick={clickHandler}>display</button>
        </div>
        {
            isCliked == true && <div>
            <h1>OUTOUT</h1>
            <h1>Name  = {name}</h1>
            <h3>Age = {age}</h3>
        </div>
        }
        
    </div>
  )
}
