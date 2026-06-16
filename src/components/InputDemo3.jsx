import React, { useState } from 'react'

export const InputDemo3 = () => {
    const [coutry, setcoutry] = useState("")

    const countries =[
        {
            name:"india",states:["gujarat","maharashtra","Goa"]
        },
        {
            name:"china",states:["vuhan","sanghai","beijing"]
        },
        {
            name:"usa",states:["texas","california","chicago"]
        }
    ]
    const countryHandler = (event)=>{
        setcoutry(event.target.value)
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>INput Demo 3</h1>
        <select onChange={(event)=>{countryHandler(event)}}>

            <option>select country</option>
            {
                countries.map((c)=>{
                    return <option value={c.name}>{c.name.toUpperCase()}</option>
                })
            }
            
        </select>
        {coutry}
        {
            //undefined.state -->error
            coutry && countries.find((c)=>c.name ==coutry).states.map((s)=>{
                return <li>{s}</li>
            })
        }

    </div>
  )
}
