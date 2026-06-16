import React, { useState } from 'react'

export const InputDemo4 = () => {

    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [users, setusers] = useState([{id:1,name:"test",age:0}])

    const nameHandler =(event)=>{
        //console.log(event.target.value)
        setname(event.target.value)
    }
    const ageHandler = (event)=>{
        //console.log(event.target.value)
        setage(event.target.value)
    }
    
    const adduser= ()=>{
        //alert("add user called..")
        //console.log("name = ",name)
        //console.log("age = ",age)
        //push name and age -->users array
        const userObj = {
                id:Math.floor(Math.random()*1000),
                name:name,
                age:age
        }
        console.log(userObj)
        //existing users
        const updatedData = [...users,userObj] //[{},{}]
        setusers(updatedData)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Input Demo 4</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
        </div>
        <div>
            <button onClick={adduser}>ADD</button>
        </div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                   users.map((u)=>{
                    return <tr>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}
