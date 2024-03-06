import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Register from './pages/Register'
import './App.css'

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element ={<Register/>}></Route>
     </Routes>
     </div>
  )
}

export default App