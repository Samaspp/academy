import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'

import '../styles/login.css'

function Login () {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  const login = async (event) => {
    event.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      setLoginEmail('')
      setLoginPassword('')
    } catch (error) {
      console.log(error.message)
    }
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className='login-container'>

        <div className='container'>

            <div className='login'>
            <form id="login">
        <h2>Login</h2>
           <p id="left">Email</p>
                <input className='email'
                    type='text'
                    placeholder=''
                    onChange={(event) => { setLoginEmail(event.target.value) }}
                ></input><br></br>
            <p id ="left">Password</p>
                <input className='password'
                    type='password'
                    placeholder=''
                    onChange={(event) => { setLoginPassword(event.target.value) }}
                ></input>
                <div className='submit'>
                <button onClick={login}>Login</button>
                <h3>Or</h3>
                <button onClick={loginWithGoogle}>Continue with Google</button>
                </div>
            </form>
            <h4>Don't have an account? <Link to= '/register'>Register</Link>  </h4>
            </div>
            </div>
            <h3>User logged in: </h3>{user?.email}
            <button onClick={logout}>Signout</button>

    </div>
  )
}

export default Login
