import React from 'react'
import { CardComponent } from '../CardComponent'
import { MyTable } from '../MyTable'

export const Sports = () => {
  var headers = ["ID","sport name","year"]
  return (
    <div>
        <h1>SPORTS</h1>
        <CardComponent title={"sports"} subtitle={"all sports"} color={"blue"}></CardComponent>
        {/* <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>sport name</th>
              <th>year</th>
            </tr>
          </thead>
        </table> */}
        <MyTable headers = {headers}></MyTable>
    </div>
  )
}
