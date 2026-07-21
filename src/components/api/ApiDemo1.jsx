import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

export const ApiDemo1 = () => {
    const[message,setMessage]=useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)

    useEffect(()=>{
        //console.log("use effect called..")
        getUsers()
    },[])

    //()=>{} callback fun
    //[] -->depd array

    const getUsers = async()=>{

        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log("res",res) //axios object..
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data) //[]
        setMessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {
            isLoading == true && <Loader/>
        }
        {/* <button onClick={getUsers}>GET</button> */}
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
