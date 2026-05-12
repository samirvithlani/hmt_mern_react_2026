import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { MapDemo1 } from './components/MapDemo1'


function App() {


  return (
    <div>
      <Header></Header>
      <MapDemo1></MapDemo1>
      {/* <Content></Content> */}
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
