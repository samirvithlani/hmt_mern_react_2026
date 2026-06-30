import React from 'react'
import { useForm } from 'react-hook-form'


export const FormDemo3 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler =(data)=>{
        console.log(data)
    }

    const validationSchema ={
        refCodeValidator:{
            required:{
                value:true,
                message:"ref code is required*"
            },
            validate:(params)=>{
                return params == "insta" || "invalid ref code*"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidator)}></input>
                <span style={{color:"red"}}>{errors.refcode && errors.refcode.message}</span>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
