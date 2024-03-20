import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Register from './pages/Register'
import Teacher from './pages/Teacher'
import Student from './pages/Student'
import './App.css'

function App () {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path="/" element ={<Register/>}></Route>
      <Route path='/home' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
     </Routes>
     </div>
  )
}

export default App
