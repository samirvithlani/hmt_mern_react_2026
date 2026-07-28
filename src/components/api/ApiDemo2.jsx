import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'

export const ApiDemo2 = () => {

    const addUser =async()=>{

        const userObj = {
            name:"neha",
            email:"neha@gmail.com",
            age:23,
            password:"neha123",
            isActive:true
        }

        try{
            const res = await axios.post(`https://node5.onrender.com/user/user/`,userObj)
            console.log(res) // axios object
            console.log(res.data) //api response
            console.log(res.status) //status
            if(res.status==200){
                toast.success("user added !!")
            }
        }catch(err){
            toast.error("error while adding user")
        }    
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={addUser}>ADD</button>
    </div>
  )
}
