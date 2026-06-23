import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "../../assets/css/ticket.css"

export const FormDemo1 = () => {
    const {register,handleSubmit} = useForm()
    const [user, setuser] = useState({})
    //register: input register..
    //handlsubmit : submit handler

    const submitHandler = (data)=>{

        console.log(data)
        setuser(data)
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
        <div>
        <h1>Output = </h1>
        <h1>Name = {user.name}</h1>
        <h2>Age = {user.age}</h2>
        <h3>Gender = {user.gender}</h3>
        </div>
          <div className="ticket-card">
      <img
        src="https://via.placeholder.com/140x180"
        alt="movie"
        className="movie-poster"
      />

      <div className="ticket-content">
        <h2>Dilwale Dulhania Le Jayenge (U)</h2>

        <p>Hindi, 2D</p>
        <p>Tue, 01 Nov | 11:30 AM</p>
        <p>Maratha Mandir, Mumbai Central</p>
      </div>

      <div className="ticket-label">
        M-Ticket
      </div>
    </div>

    </div>
  )
}
