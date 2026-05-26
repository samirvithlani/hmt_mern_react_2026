import React from 'react'

export const FunCallDemo1 = () => {

    const test = ()=>{
        alert("test function called..")
    }
    const test2 = (x)=>{
        alert("Test2 called "+x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FunCallDemo1</h1>
        <button onClick={test}>TEST</button>
        <button onClick={()=>{test2(100)}}>TEST 2</button>
    </div>
  )
}
