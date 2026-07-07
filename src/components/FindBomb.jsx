import React, { useState } from 'react'

export const FindBomb = () => {
    var gridsize = 5
    var totaltiles = gridsize * gridsize
    const [clickedTiles, setclickedTiles] = useState([])
    console.log("clicked tiles",clickedTiles)

    const clickHandler = (index)=>{
        //alert(index)
        //spread operators
        setclickedTiles([...clickedTiles,index])

    }
    

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
                    return<div 
                    onClick={()=>{clickHandler(index)}}
                    style={{
                        width:"60px",
                        height:"60px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        border:"2px solid #ccc",
                        //backgroundColor:"white",
                        backgroundColor:clickedTiles.includes(index) ?"gray":"white",
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
