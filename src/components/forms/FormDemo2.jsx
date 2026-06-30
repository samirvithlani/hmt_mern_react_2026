import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit,formState:{errors}} =useForm()
    console.log("errors..",errors)
    const [ouput, setouput] = useState({})
    const [isSubbmited, setisSubbmited] = useState(false)
    
    const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log(data)
        setouput(data)
        setisSubbmited(true)
    }

    const validationSchema ={
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"min age is 18"
            },
            max:{
                value:60,
                message:"max age is 60"
            }
        },
        addressValidator:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:10,
                message:"min len age is 10"
            },
            maxLength:{
                value:50,
                message:"max len is 50"
            }
        },
        genderValidation:{
            required:{
                value:true,
                message:"gender is required"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label>ADDRESS</label>
                <input type='text' {...register("address",validationSchema.addressValidator)}></input>
                {errors.address && errors.address.message}
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE : <input type='radio' {...register("gender",validationSchema.genderValidation)} value="male"></input> 
                FEMALE : <input type='radio' {...register("gender",validationSchema.genderValidation)} value="female"></input> 
                <span style={{color:"red"}}>{errors.gender && errors.gender.message}</span>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
            isSubbmited &&  <div>
            <h1>OUTPUT</h1>
            <h1>Name = {ouput.name}</h1>
        </div>
        }
        
    </div>
  )
}
