import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home () {
  return (
    <div className='home'>
      <div className='container'>
      <Link to='/student'>
        <div className='student'>
          <h4>I am a student</h4>
        </div>
        </Link>
        <Link to ='/teacher'>
        <div className='teacher'>
          <h4>I am a teacher</h4>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Home
