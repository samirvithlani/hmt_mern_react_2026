import React from 'react'

export const Content = () => {
    const user = {
        id:1,name:"amit",age:23
    }
  return (
    <div style={{textAlign:"center"}}>
            <h1 style={{color:"yellow"}}>Name = {user.name}</h1>
            <h2 style={{backgroundColor:"blue"}}>Age = {user.age}</h2>
    </div>
  )
}
