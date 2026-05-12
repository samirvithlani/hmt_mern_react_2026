import React from 'react'

export const MapDemo1 = () => {
    var users= ["raj","parth","amit","sumit","arjun"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            users.map((user)=>{
                return <li>{user}</li>
            })
        }
    </div>
  )
}
