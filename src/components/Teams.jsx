import React from "react";
import { Link } from "react-router-dom";
import { CardComponent } from "./CardComponent";
import { MyTable } from "./MyTable";

export const Teams = () => {

  //var headers = ["id","name","email","age"]
  var data = [
    {id:1,name:"amit",age:23,email:"amit@gmail.com"},
    {id:2,name:"raj",age:24,email:"amit@gmail.com"},
    {id:3,name:"parth",age:22,email:"amit@gmail.com"},
    {id:4,name:"neha",age:26,email:"amit@gmail.com"},
  ]

  var headers = Object.keys(data[0])



  const iplTeams = [
    { id: 1, name: "CSK" },
    { id: 2, name: "MI" },
    { id: 3, name: "RCB" },
    { id: 4, name: "KKR" },
    { id: 5, name: "GT" },
    { id: 6, name: "RR" },
    { id: 7, name: "SRH" },
    { id: 8, name: "DC" },
    { id: 9, name: "PBKS" },
    { id: 10, name: "LSG" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>TEAMS</h1>
      {
        iplTeams.map((ip)=>{
            return <li>
                <Link to={`/teamdetail/${ip.id}`}>{ip.name}</Link>
            </li>
        })
      }

      {/* <CardComponent title={"Teams"} subtitle={"Team List"} color={"white"} bgcolor ={"blue"}></CardComponent> */}
      {/* <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>AGE</th>
            </tr>
          </thead>
      </table> */}

        <MyTable headers ={headers} data = {data}></MyTable>
    </div>

  );
};
