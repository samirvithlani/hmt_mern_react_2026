import React from 'react'
import { Link } from 'react-router-dom'

export const Shows = () => {

  const showList = [
    {id:1,name:"Money Heist"},
    {id:2,name:"Breaking Bad"},
    {id:3,name:"Stranger Things"},
    {id:4,name:"The Friends"},
    {id:5,name:"Berlin"}
  ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Shows</h1>
        {
          showList.map((sh)=>{
            return <li>
              {/* <Link to="/watch/sh.name">{sh.name}</Link> */}
              <Link to ={`/watch/${sh.name}`}>{sh.name}</Link>
            </li>
          })
        }
    </div>
  )
}
