import React from 'react'

export const MyTable = (props) => {
    //teams var headers = ["id","name","email","age"]
    //{headers:[]}
  return (
    <table className='table table-dark'>
        <thead>
            <tr>
                  {
                    props.headers.map((h)=>{
                        return <th>{h}</th>
                    })
                  }               
            </tr>
        </thead>
    </table>
  )
}
