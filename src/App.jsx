import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'


function App() {

  const [count, setCount] = useState(0)
  var year = 2026
  var city = "HimmatNaGaR"
  var isActive = true
  var user = {
    id:1,
    name:"amit"
  }

  return (
    <div>
      <Header></Header>
      
      <h1>HELLO</h1>
      {year}
      <h1>Year = {year}</h1>
      <h2>City = {city}</h2>
      
      <h2>Active = {isActive == true ? "Active" : "Not Active"}</h2>
      <h1>Id = {user.id}</h1>
      <h2>Name = {user.name}</h2>
      <Footer></Footer>
    </div>
  )
}

export default App
