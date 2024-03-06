import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='student'>
          <h1>I am a student</h1>
        </div>
        <div className='teacher'>
          <h1>I am a teacher</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Home