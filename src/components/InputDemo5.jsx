import React, { useState } from 'react'

export const InputDemo5 = () => {

    const [name, setname] = useState("")
    const [users, setusers] = useState([])
    
    const nameHandler = (event)=>{
        //console.log(event.target.value)
        setname(event.target.value)
    }
    const addUser = ()=>{
        //alert("user called..")
        //push data in users array
        setusers([...users,name])
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo5</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
        </div>
        <div>
            <button onClick={addUser}>ADD</button>
        </div>
        <ol>
            {
                users.map((u)=>{
                    return<li>{u}</li>
                })
            }
        </ol>
    </div>
  )
}
