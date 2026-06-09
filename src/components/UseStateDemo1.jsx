import React, { useState } from 'react'

export const UseStateDemo1 = () => {

  //var count = 0;
  const [count,setCount] = useState(0)
  //count --> variable
  //setCount --> function --> to make cahnge in count..
  //useState(0) -- 0 initial value

  const increseCount =()=>{
    //count++ //1
    setCount(count+1)
    console.log("count  =",count) //1
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>Increse</button>
    </div>
  )
}
