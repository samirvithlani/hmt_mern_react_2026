import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UpdateUser = () => {
    //<Route path='/updateuser/:id' element ={<UpdateUser/>}></Route>
    const id = useParams().id

    //to fetch state data form Link

    const state = useLocation().state;
    console.log(state)
    const {register,handleSubmit,formState:{errors}}=useForm({defaultValues:state})
    const navigate = useNavigate()

    const submitHandler = async(data)=>{
        console.log(data)
        //update api
        delete data._id
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log(res)
        if(res.status==200){
            toast.success("data updated..")
            navigate("/apidemo1")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UPDATE USER - {id}</h1>
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
