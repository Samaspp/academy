import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    
  
  return (
    
         <nav>
        <div className = "nav-logo-container">
          
        </div>
        <div className="navbar-links-container">
          <p>
            <Link to="/"> Home  </Link>
            <Link to="/about">  About </Link>
            <Link to="/login"> Login </Link>
            <Link to="/auth"> Register </Link>
           </p> 
        </div>
           
       
    </nav>

    
  )
}

export default Navbar