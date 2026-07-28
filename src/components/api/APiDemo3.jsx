import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const APiDemo3 = () => {
    const {register,handleSubmit}=useForm()
    const navigate = useNavigate()

   useEffect(() => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })
}, [])

    const submitHandler = async(data)=>{
        data.age = parseInt(data.age)
        data.isActive = data.isActive == "true"?true:false
        console.log(data)
        try{
            const res = await axios.post(`https://node5.onrender.com/user/user/`,data)
            if(res.status==200){
                toast.success("user added")
                navigate("/apidemo1")
            }
        }catch(err){
            toast.error("error while adding user..")
        }   
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>APiDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register('email')}></input>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type='password' {...register("password")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>STATUS</label>
                ACTIVE: <input type='radio' value="true"  {...register("isActive")}></input> <br></br>
                NOT ACTIVE: <input type='radio' value="false"  {...register("isActive")}></input> <br></br>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
