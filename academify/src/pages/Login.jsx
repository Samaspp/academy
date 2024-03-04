import React from 'react'
import '../styles/login.css'

function Login() {
    function handleRegistration(){
        alert("you have registered")
    }
  return (
    <div className='login'>
        
        <div className='container'>
        <h2>Register</h2>
            <form>
                <input className='email'
                    type='text'
                    placeholder='Email'
                ></input>
                <input className='password'
                    type='password'
                    placeholder='Password'
                ></input>
                <div className='submit'>
                <button onClick={handleRegistration}>Submit</button> </div>
            </form>
        </div>
    </div>
  )
}

export default Login