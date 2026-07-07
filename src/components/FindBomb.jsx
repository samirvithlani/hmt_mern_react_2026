import React from 'react'

export const FindBomb = () => {
    var gridsize = 5
    var totaltiles = gridsize * gridsize
  return (
    <div style={{textAlign:"center"}}>
        <h1>FIND BOMB</h1>
        <div style={{
            display:"grid",
            gridTemplateColumns:`repeat(${gridsize},60px)`,
            gap:"10px",
            justifyContent:"center",
            margin:"20px 0"
        }}>
            {
                Array.from({length:totaltiles}).map((elm,index)=>{
                    return<div style={{
                        width:"60px",
                        height:"60px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        border:"2px solid #ccc",
                        backgroundColor:"white",
                        cursor:"pointer",
                        fontSize:"18px",
                        borderRadius:"4px",
                    }}> 
                    {/* inline css over */}
                        {index}
                        </div>
                })
            }
        </div>
    </div>
  )
}
