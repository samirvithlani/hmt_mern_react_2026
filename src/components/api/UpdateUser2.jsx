import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export const UpdateUser2 = () => {

    const id = useParams().id;
    const {register,handleSubmit,formState:{errors},setValue}=useForm()
    const navigate = useNavigate()

    const submitHandler  = async(data)=>{

        //put
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        if(res.status==200){
            toast.success("user updated !!")
            navigate("/apidemo1")
        }

    }
    const getUserById=async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        const user = res.data.data; 
        setValue("name",user.name)
        setValue('age',user.age)
        setValue("email",user.email)
    }
    useEffect(()=>{
        getUserById()
    })
  return (
    <div style={{textAlign:"center"}}>
        <h1>UPDATE USER 2</h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <input type='submit' value="update"></input>
            </div>
        </form>
    </div>
  )
}
