import React from 'react'

function Login() {
    function handleRegistration(){
        alert("you have registered")
    }
  return (
    <div className='login'>
        <h2>Signup/Login</h2>
        <div className='container'>
            <form>
                <input 
                type='text'
                placeholder='Email'
                ></input>
                <input
                type='password'
                placeholder='Password'
                ></input>
                <button onClick={handleRegistration}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login