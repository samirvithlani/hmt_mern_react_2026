import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {


    const boardList = ["GUJ BOARD","CBSC BOARD","INT BOARD"]

    const{register,handleSubmit,formState:{errors}}=useForm()
    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        boardValidator:{
            required:{
                value:true,
                message:"board is required*"
            },
            validate:(params)=>{
                return (params =="CBSC BOARD" || params =="INT BOARD") || "invalid board"
            }
        },
        skillValidator:{
            required:{
                value:true,
                message:"skill is required*"
            },
            validate:(params)=>{
                //console.log("params skills",params)
                return (params.length >=3 || "min 3 skills are required*") && (params.includes("c") || "c lang is compul")
            }
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                <span style={{color:"red"}}>{errors.name && errors.name.message}</span>
            </div>
            <div>
                <label>12th BOARD</label>
                <select {...register("board",validationSchema.boardValidator)}>
                    <option value="">SELECT BOARD</option>
                  {
                    boardList.map((b)=>{
                        return<option value={b}>{b}</option>
                    })
                  }
                </select>
                  <span style={{color:"red"}}>{errors.board && errors.board.message}</span>
            </div>
            <div>
                <label>SKILLS</label> <br></br>
                JS :<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="js"></input>
                <br></br>
                CSS :<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="css"></input>
                <br></br>
                HTML:<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="html"></input>
                <br></br>
                CPP :<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="cpp"></input>
                <br></br>
                DS :<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="ds"></input>
                <br></br>
                C LANG :<input type='checkbox' {...register("skills",validationSchema.skillValidator)} value="c"></input>
                <br></br>
                  
                  <span style={{color:"red"}}>{errors.skills && errors.skills.message}</span>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
