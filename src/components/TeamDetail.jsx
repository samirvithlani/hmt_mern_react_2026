import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    const id = useParams().id; //clicked.. --1

    const iplTeams2026 = [
  {
    id: 1,
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "#F9CD05",
    secondaryColor: "#1D2951",
    captain: "Ruturaj Gaikwad",
    coach: "Stephen Fleming",
    trophyWins: 5,
    homeGround: "M. A. Chidambaram Stadium, Chennai",
  },
  {
    id: 2,
    shortName: "MI",
    fullName: "Mumbai Indians",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E",
    captain: "Hardik Pandya",
    coach: "Mahela Jayawardene",
    trophyWins: 5,
    homeGround: "Wankhede Stadium, Mumbai",
  },
  {
    id: 3,
    shortName: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primaryColor: "#D71920",
    secondaryColor: "#000000",
    captain: "Rajat Patidar",
    coach: "Andy Flower",
    trophyWins: 1,
    homeGround: "M. Chinnaswamy Stadium, Bengaluru",
  },
  {
    id: 4,
    shortName: "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "#3A225D",
    secondaryColor: "#D4AF37",
    captain: "Ajinkya Rahane",
    coach: "Chandrakant Pandit",
    trophyWins: 3,
    homeGround: "Eden Gardens, Kolkata",
  },
  {
    id: 5,
    shortName: "GT",
    fullName: "Gujarat Titans",
    primaryColor: "#0B1C3D",
    secondaryColor: "#A5C8FF",
    captain: "Shubman Gill",
    coach: "Ashish Nehra",
    trophyWins: 1,
    homeGround: "Narendra Modi Stadium, Ahmedabad",
  },
  {
    id: 6,
    shortName: "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "#EA1A85",
    secondaryColor: "#1C1C1C",
    captain: "Sanju Samson",
    coach: "Rahul Dravid",
    trophyWins: 1,
    homeGround: "Sawai Mansingh Stadium, Jaipur",
  },
  {
    id: 7,
    shortName: "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "#F26522",
    secondaryColor: "#000000",
    captain: "Pat Cummins",
    coach: "Daniel Vettori",
    trophyWins: 1,
    homeGround: "Rajiv Gandhi International Stadium, Hyderabad",
  },
  {
    id: 8,
    shortName: "DC",
    fullName: "Delhi Capitals",
    primaryColor: "#17479E",
    secondaryColor: "#EF1B23",
    captain: "Axar Patel",
    coach: "Hemang Badani",
    trophyWins: 0,
    homeGround: "Arun Jaitley Stadium, Delhi",
  },
  {
    id: 9,
    shortName: "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "#DD1F2D",
    secondaryColor: "#A7A9AC",
    captain: "Shreyas Iyer",
    coach: "Ricky Ponting",
    trophyWins: 0,
    homeGround: "Maharaja Yadavindra Singh Stadium, Mohali",
  },
  {
    id: 10,
    shortName: "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "#00AEEF",
    secondaryColor: "#FF6F00",
    captain: "Rishabh Pant",
    coach: "Justin Langer",
    trophyWins: 0,
    homeGround: "BRSABV Ekana Cricket Stadium, Lucknow",
  },
];

const foundTeam = iplTeams2026.find((t)=>t.id == id)
//foundTeam --> object
console.log("foundTeam",foundTeam)

  return (
    <div style={{textAlign:"center"}}>
        <h1>TeamDetail {id}</h1>
        <h1>Team Name = {foundTeam.fullName}</h1>
        <h2>Short Name = {foundTeam.shortName}</h2>
        <h2>Captain = {foundTeam.captain}</h2>
        <h3>trophyWins ={foundTeam.trophyWins}</h3>
    </div>
  )
}
