import React from 'react'
import { CardComponent } from '../CardComponent'
import { MyTable } from '../MyTable'

export const Sports = () => {
  //var headers = ["ID","sport name","year"]
  var sports =[
    {id:101,sportName:"cricket",year:1850},
    {id:102,sportName:"football",year:1950},
    {id:103,sportName:"chess",year:1920},
  ]

  var headers = Object.keys(sports[0])
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
        <MyTable headers = {headers} data ={sports}></MyTable>
    </div>
  )
}
