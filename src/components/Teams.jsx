import React from "react";
import { Link } from "react-router-dom";

export const Teams = () => {
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
    </div>
  );
};
