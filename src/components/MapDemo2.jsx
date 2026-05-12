import React from "react";

export const MapDemo2 = () => {
  const employees = [
    { id: 1, name: "raj", age: 23 },
    { id: 2, name: "parth", age: 24 },
    { id: 3, name: "jay", age:18 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MapDemo2</h1>
      {
        employees.map((emp)=>{
            return <li>{emp.id} {emp.name} {emp.age}</li>
        })
      }
    </div>
  );
};
