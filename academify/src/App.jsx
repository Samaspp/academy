import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path=""></Route>
     </Routes>
     </div>
  )
}

export default App