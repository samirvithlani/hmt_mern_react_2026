import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    //<Route path='/watch/:name' element = {<Watch/>}></Route>
    const name = useParams().name;

    //<Route path='/watch/:id' element = {<Watch/>}></Route>
    //const id = useParams().id

  return (
    <div style={{textAlign:"center"}}>
        Watching !!! {name}
    </div>
  )
}
