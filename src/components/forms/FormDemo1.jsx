import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    //register: input register..
    //handlsubmit : submit handler

    const submitHandler = (data)=>{

        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text'{...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label> <br></br>
                MALE : <input type='radio' {...register("gender")} value="male"></input>
                FEMALE: <input type='radio' {...register("gender")} value="female"></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
