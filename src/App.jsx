import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'

import { Movies } from './components/hotstar/Movies'
import { Shows } from './components/hotstar/Shows'
import { Route, Routes } from 'react-router-dom'
import { Sports } from './components/hotstar/Sports'
import { Navbar } from './components/Navbar'
import { Error404 } from './components/Error404'
import { HomePage } from './components/hotstar/HomePage'
import { Watch } from './components/hotstar/Watch'
import { Teams } from './components/Teams'
import { TeamDetail } from './components/TeamDetail'
import { FunCallDemo1 } from './components/FunCallDemo1'
import { NetflixMovies } from './components/netflix/NetflixMovies'
import { NetflixShows } from './components/netflix/NetflixShows'
import { Students } from './components/Students'
import { StudentDetail } from './components/StudentDetail'
import { StudentResult } from './components/StudentResult'
import { Books } from './components/Books'
import { BookFilter } from './components/BookFilter'
import { Employees } from './components/Employees'
import { EmployeeDetail } from './components/EmployeeDetail'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { InputDemo1 } from './components/InputDemo1'
import { InputDemo2 } from './components/InputDemo2'
import { InputDemo3 } from './components/InputDemo3'
import { InputDemo4 } from './components/InputDemo4'


function App() {


  return (
    <div>
      <Navbar></Navbar>
          <Routes>
            <Route path='' element = {<HomePage/>}></Route>
            <Route path='/movies' element={<Movies/>}></Route>  
            <Route path='/shows' element ={<Shows/>}></Route>
            <Route path='/sports' element = {<Sports/>}></Route>
            <Route path='/watch/:name' element = {<Watch/>}></Route>
            <Route path='/teams' element = {<Teams/>}></Route>
            <Route path='/teamdetail/:id' element = {<TeamDetail/>}></Route>
            <Route path='/funcall' element = {<FunCallDemo1/>}></Route>
            <Route path='/netflixmovies' element ={<NetflixMovies/>}></Route>
            <Route path='/netflixshows' element = {<NetflixShows/>}></Route>
            <Route path='/students' element = {<Students/>}></Route>
            <Route path='/studentdetail/:id' element ={<StudentDetail/>}></Route>
            <Route path='/studentresult/:id' element ={<StudentResult/>}></Route>
            <Route path='/books' element  ={<Books/>}></Route>
            <Route path='/bookfilter/:price' element = {<BookFilter/>}></Route>
            <Route path='/employees' element ={<Employees/>}></Route>
            <Route path='/employeedetail' element={<EmployeeDetail/>}></Route>
            <Route path='/usestatedemo1' element = {<UseStateDemo1/>}></Route>
            <Route path='/usestatedemo2' element = {<UseStateDemo2/>}></Route>
            <Route path='/usestatedemo3' element = {<UseStateDemo3/>}></Route>
            <Route path='/inputdemo1' element = {<InputDemo1/>}></Route>
            <Route path='/inputdemo2' element ={<InputDemo2/>}></Route>
            <Route path='/inputdemo3' element ={<InputDemo3/>}></Route>
            <Route path='/inputdemo4' element ={<InputDemo4/>}></Route>
            <Route path='/*' element = {<Error404/>}></Route>
          </Routes> 
    </div>
  )
}

export default App
