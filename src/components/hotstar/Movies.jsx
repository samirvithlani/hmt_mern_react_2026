import React from 'react'
import { Link } from 'react-router-dom'
import { CardComponent } from '../CardComponent'
import { MyButton } from '../MyButton'
import { Box } from '../Box'

export const Movies = () => {

  const movieTest = ()=>{
    alert("movie test called..")
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Movies</h1>
        <ol>
          <li>
            <Link to="/watch/dhurnadhar">Dhurandhar</Link>
          </li>
          <li>
            <Link to="/watch/kesri">Kesri</Link>
          </li>
          <li>
            <Link to="/watch/12thfail">12th Fail</Link>
          </li>
        </ol>

        <CardComponent subtitle ={"my movies"}></CardComponent>
        <MyButton funName ={movieTest}></MyButton>
        <Box>
          <h1>Hello</h1>
          <h2>Hi</h2>
          <p>ok</p>
        </Box>
        <Box>
          <h1>this is second box</h1>
        </Box>
    </div>
  )
}
