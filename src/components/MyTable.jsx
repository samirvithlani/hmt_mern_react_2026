import React from 'react'

export const MyTable = (props) => {
    //teams var headers = ["id","name","email","age"]
    //{headers:[],data:[]}
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
        <tbody>
            {
                //{id:1,name:"amit",age:23,email:"amit@gmail.com"},
                props.data.map((d)=>{
                    return <tr>
                        {
                            props.headers.map((td)=>{
                                //td =["id","name","email","age"]
                                //d ={id:1,name:"amit",age:23,email:"amit@gmail.com"},
                                return <td>{d[td]}</td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}
