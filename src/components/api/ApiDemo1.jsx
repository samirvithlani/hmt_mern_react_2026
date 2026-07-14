import axios from 'axios'
import React from 'react'

export const ApiDemo1 = () => {

    const getUsers = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user/")
        console.log("res",res) //axios object..
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data) //[]

    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={getUsers}>GET</button>
    </div>
  )
}
