import React from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {
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
    </div>
  )
}
