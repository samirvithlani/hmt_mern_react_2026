import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const[message,setMessage]=useState("")
    const [users, setusers] = useState([])

    const getUsers = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log("res",res) //axios object..
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data) //[]
        setMessage(res.data.message)
        setusers(res.data.data)

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={getUsers}>GET</button>
        {message}
        <table className='table table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>STATUS</th>
            </tr>
            {
                users.map((u)=>{
                    return <tr>
                        <td>{u._id}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.age}</td>
                        <td>{u.isActive==true?"Active":"Not ACtive"}</td>
                    </tr>
                })
            }
        </table>
    </div>
  )
}
