import React from 'react'
import "../assets/css/box.css"

export const Box = ({children}) => {
  return (
    <div className='box'>
        {children}
    </div>
  )
}
