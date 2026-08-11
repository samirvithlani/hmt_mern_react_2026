import React from "react";

export const CardComponent = (props) => {
    //props - {title:""}
  return (
    <div
      style={{
        height: "200px",
        width: "400px",
        //backgroundColor: "white",
        backgroundColor:props.bgcolor || "white",
        //color: "black",
        color:props.color ||"black",
        border: "1px solid black",
        textAlign:"center",
        padding:"2px",
        alignItems:"center",
        borderRadius:"10px"
      }}
    >
        {/* <h1 style={{textAlign:"center"}}>{props.title}</h1> */}
        <h1 style={{textAlign:"center"}}>{props.title || "ADD YOUR TITLE"}</h1>
        <h2>{props.subtitle || "add your sub-title"}</h2>
    </div>
  );
};
